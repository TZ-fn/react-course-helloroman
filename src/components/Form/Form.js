import React from 'react';
import styles from './Form.module.scss';
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
    activeOption: formTypes.twitter,
  }

  handleFormTypeChange = (type) => {
    this.setState({
      activeOption: type,
    })
  }

  render() {
    const { activeOption } = this.state;

    return (
      <div className={styles.wrapper}>
        <Title>Add a new {formTypesDescriptions[activeOption]}</Title>
        <form autoComplete='off' onSubmit={this.props.submitFn} className={styles.form}>

          <Radio
            id={formTypes.twitter}
            checked={activeOption === formTypes.twitter}
            changeFn={() => this.handleFormTypeChange(formTypes.twitter)}
          >
            Twitter
            </Radio>
          <Radio
            id={formTypes.article}
            checked={activeOption === formTypes.article}
            changeFn={() => this.handleFormTypeChange(formTypes.article)}
          >
            Article
            </Radio>
          <Radio
            id={formTypes.note}
            checked={activeOption === formTypes.note}
            changeFn={() => this.handleFormTypeChange(formTypes.note)}
          >
            Note
            </Radio>

          <Input
            name='name'
            label={activeOption === formTypes.twitter ? 'Twitter Name' : 'Title'}
            maxLength={40}
          />

          {activeOption !== formTypes.note ?
            <Input
              name='link'
              label={activeOption === formTypes.twitter ? 'Twitter Link' : 'Link'}
              maxLength={40}
            /> : null}

          {activeOption === formTypes.twitter ?
            <Input
              name='image'
              label='Image'
              maxLength={40}
            /> : null}

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