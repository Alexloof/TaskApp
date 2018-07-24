import React, { Component } from 'react'

import { Container } from './style'

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

class AddBoardForm extends Component {
  render() {
    return (
      <Container>
        <h1>Create a new Board</h1>
        <Input placeholder="Give your board a name..." />
        <Button>Save</Button>
      </Container>
    )
  }
}

export default AddBoardForm
