import React, { Component } from 'react'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import Icon from '../../../../components/Icon'

class AddListForm extends Component {
  state = {
    listName: ''
  }

  addNewList = e => {
    e.preventDefault()
    console.log('ADD LIST', this.state.listName)
  }

  onInputType = e => {
    this.setState({
      listName: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.addNewList}>
        <Button>Add new list...</Button>
        <Input onChange={this.onInputType} value={this.state.listName} />
        <Button type="submit">Save</Button>
        <Icon name="times" size="30px" style={{ cursor: 'pointer' }} />
      </form>
    )
  }
}

export default AddListForm
