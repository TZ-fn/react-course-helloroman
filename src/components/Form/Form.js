import React from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';
import Input from '../Input/Input';
import Radio from './Radio';
import Button from '../Button/Button';
import Title from '../Title/Title'

const formTypes = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
}

const formTypesDescriptions = {
  twitter: 'favourite Twitter account',
  article: 'article',
  note: 'note',
}

class Form extends React.Component {
  state = {
    formType: formTypes.twitter,
    title: '',
    link: '',
    image: '',
    description: '',
  }

  handleFormTypeChange = (type) => {
    this.setState({
      formType: type,
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const { formType } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add a new {formTypesDescriptions[formType]}</Title>
            <form autoComplete='off' onSubmit={(e) => context.addItem(e, this.state)} className={styles.form}>

              <Radio
                id={formTypes.twitter}
                checked={formType === formTypes.twitter}
                changeFn={() => this.handleFormTypeChange(formTypes.twitter)}
              >
                Twitter
            </Radio>
              <Radio
                id={formTypes.article}
                checked={formType === formTypes.article}
                changeFn={() => this.handleFormTypeChange(formTypes.article)}
              >
                Article
            </Radio>
              <Radio
                id={formTypes.note}
                checked={formType === formTypes.note}
                changeFn={() => this.handleFormTypeChange(formTypes.note)}
              >
                Note
            </Radio>

              <Input
                name='title'
                label={formType === formTypes.twitter ? 'Twitter Name' : 'Title'}
                onChange={this.handleInputChange}
                value={this.state.title}
              />

              {formType !== formTypes.note ?
                <Input
                  name='link'
                  label={formType === formTypes.twitter ? 'Twitter Link' : 'Link'}
                  onChange={this.handleInputChange}
                  value={this.state.link}
                /> : null}

              {formType === formTypes.twitter ?
                <Input
                  name='image'
                  label='Image'
                  onChange={this.handleInputChange}
                  value={this.state.image}
                /> : null}

              <Input
                tag='textarea'
                name='description'
                label='Description'
                onChange={this.handleInputChange}
                value={this.state.description}
              />

              <Button>Add a new item</Button>
            </form >
          </div >
        )}
      </AppContext.Consumer>
    )
  }
}

export default Form;