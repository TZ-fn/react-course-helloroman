import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
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
    activeOption: formTypes.twitter,
  }

  handleFormTypeChange = (type) => {
    this.setState({
      activeOption: type,
    })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Add a new {formTypesDescriptions[this.state.activeOption]}</Title>
        <form autoComplete='off' onSubmit={this.props.submitFn} className={styles.form}>

          <Radio
            id={formTypes.twitter}
            checked={this.state.activeOption === formTypes.twitter}
            changeFn={() => this.handleFormTypeChange(formTypes.twitter)}
          >
            Twitter
            </Radio>
          <Radio
            id={formTypes.article}
            checked={this.state.activeOption === formTypes.article}
            changeFn={() => this.handleFormTypeChange(formTypes.article)}
          >
            Article
            </Radio>
          <Radio
            id={formTypes.note}
            checked={this.state.activeOption === formTypes.note}
            changeFn={() => this.handleFormTypeChange(formTypes.note)}
          >
            Note
            </Radio>
          {/* <input
              id={formTypes.twitter}
              type='radio'
              checked={this.state.activeOption === formTypes.twitter}
              onChange={() => this.handleFormTypeChange(formTypes.twitter)}
            >
            </input>
            <label htmlFor="formTypes.twitter">Twitter</label>
            <input
              id={formTypes.article}
              type='radio'
              checked={this.state.activeOption === formTypes.article}
              onChange={() => this.handleFormTypeChange(formTypes.article)}
            >
            </input>
            <label htmlFor="formTypes.article">Article</label>
            <input
              id={formTypes.note}
              type='radio'
              checked={this.state.activeOption === formTypes.note}
              onChange={() => this.handleFormTypeChange(formTypes.note)}
            >
            </input >
            <label htmlFor="formTypes.note">Note</label> */}
          <Input
            name='name'
            label='Name'
            maxLength={40}
          />

          <Input
            name='link'
            label='Twitter link'
            maxLength={40}
          />

          <Input
            name='image'
            label='Image'
            maxLength={40}
          />

          <Input
            tag='textarea'
            name='description'
            label='Description'
          />

          <Button>Add a new item</Button>
        </form >
      </div >
    )
  }
}

export default Form;