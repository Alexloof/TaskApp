import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_TASK, { addTaskOptions } from 'api/mutations/task/addTask'

import { Button, Input } from 'components'
import { closeModal } from 'components/Modal'

import { StyledForm, Title, SubTitle } from './style'

class AddCardForm extends Component {
  state = {
    cardTitle: ''
  }

  addCard = (e, addTask) => {
    e.preventDefault()

    if (this.state.cardTitle) {
      addTask(
        addTaskOptions({
          taskListId: this.props._id,
          title: this.state.cardTitle,
          boardId: this.props.boardId
        })
      )
      closeModal()
    }
  }

  render() {
    const { cardTitle } = this.state
    return (
      <Mutation
        mutation={ADD_TASK}
        variables={{
          taskListId: this.props._id,
          title: cardTitle
        }}
      >
        {addTask => (
          <StyledForm onSubmit={e => this.addCard(e, addTask)}>
            <Title>Add Card</Title>
            <SubTitle>{this.props._id}</SubTitle>
            <SubTitle>Title</SubTitle>
            <Input
              value={cardTitle}
              onChange={e => this.setState({ cardTitle: e.target.value })}
              placeholder="Describe the card..."
              autoFocus
            />
            <Button type="submit" style={{ marginTop: '20px' }}>
              Add Card
            </Button>
          </StyledForm>
        )}
      </Mutation>
    )
  }
}

export default AddCardForm
