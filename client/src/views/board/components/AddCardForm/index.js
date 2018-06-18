import React, { Component } from 'react'

import { StyledForm, Title, SubTitle } from './style'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import { clodeModal } from '../../../../components/Modal'

class AddCardForm extends Component {
  state = {
    cardTitle: ''
  }

  addCard = e => {
    e.preventDefault()
    console.log('ADD CARD', this.state.cardTitle)

    clodeModal()
  }

  render() {
    return (
      <StyledForm onSubmit={this.addCard}>
        <Title>Add Card</Title>
        <SubTitle>{this.props.id}</SubTitle>
        <SubTitle>Title</SubTitle>
        <Input placeholder="Describe the card..." />
        <Button type="submit" style={{ marginTop: '10px' }}>
          Add Card
        </Button>
      </StyledForm>
    )
  }
}

export default AddCardForm
