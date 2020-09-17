import React from 'react';
import './Root.css';
import AppContext from '../../context';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {
  state = {
    twitter: [],
    article: [],
    note: [],
    isModalOpen: false,
  }

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.formType]: [...prevState[newItem.formType], newItem],
    }));

    this.closeModal();
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }


  render() {

    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };
    const { isModalOpen } = this.state;

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path='/' component={TwittersView} />
            <Route path='/articles' component={ArticlesView} />
            <Route path='/notes' component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default Root;