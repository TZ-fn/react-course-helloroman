import React from 'react';
import './Root.css';
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

const initialStateItems = [{
  image: 'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/original/oapgW_Fp_400x400.jpg',
  name: 'Dan Abramov',
  description: 'Working on @reactjs. The demo guy.',
  twitterLink: 'https://twitter.com/dan_abramov',
},
{
  image: 'https://avatars2.githubusercontent.com/u/100200?s=460&u=27ba6e62a03c423018655aafaa5333e9d4f761cf&v=4',
  name: 'Ryan Florence',
  description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
  twitterLink: 'https://twitter.com/ryanflorence',
},
]

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: false,
  }

  addItem = (e) => {

    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }))

    e.target.reset();
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
    const { isModalOpen } = this.state;
    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path='/' component={TwittersView} />
            <Route path='/articles' component={ArticlesView} />
            <Route path='/notes' component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </>
      </BrowserRouter>
    )
  }
}

export default Root;