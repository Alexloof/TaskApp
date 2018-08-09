import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_BOARD, { addBoardOptions } from 'api/mutations/board/addBoard'

import { Container } from './style'

import { Input, Button } from 'components'

class AddBoardForm extends Component {
  state = {
    name: ''
  }
  onAddBoard = async addBoard => {
    if (this.state.name) {
      try {
        addBoard(addBoardOptions({ name: this.state.name }))
        this.props.closeModal()
      } catch (error) {}
    }
  }

  render() {
    const { name } = this.state

    return (
      <Mutation mutation={ADD_BOARD} variables={{ name }}>
        {(addBoard, { loading, error, data }) => (
          <Container>
            <h1>Create a new Board</h1>
            <Input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              placeholder="Give your board a name..."
              autoFocus
            />
            <Button onClick={() => this.onAddBoard(addBoard)}>Save</Button>
          </Container>
        )}
      </Mutation>
    )
  }
}

export default AddBoardForm
