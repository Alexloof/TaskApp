import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_BOARD from '../../../../api/mutations/board/addBoard'

import { Container } from './style'

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

class AddBoardForm extends Component {
  state = {
    name: ''
  }
  onAddBoard = async addBoard => {
    if (this.state.name) {
      try {
        await addBoard()
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
            />
            <Button onClick={() => this.onAddBoard(addBoard)}>Save</Button>
          </Container>
        )}
      </Mutation>
    )
  }
}

export default AddBoardForm
