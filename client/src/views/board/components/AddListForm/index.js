import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_TASK_LIST from 'api/mutations/taskList/addTaskList'

import { StyledForm, Title, SubTitle } from './style'

import { Button, Input } from 'components'

class AddListForm extends Component {
  state = {
    listName: ''
  }

  addNewList = (e, addTaskList) => {
    e.preventDefault()
    if (this.state.listName) {
      addTaskList()
      this.setState({
        listName: ''
      })
    }
  }

  onInputType = e => {
    this.setState({
      listName: e.target.value
    })
  }

  render() {
    return (
      <Mutation
        mutation={ADD_TASK_LIST}
        variables={{ name: this.state.listName, boardId: this.props.boardId }}
      >
        {addTaskList => (
          <StyledForm onSubmit={e => this.addNewList(e, addTaskList)}>
            <Title>Add a new list</Title>
            <SubTitle>Name</SubTitle>
            <Input
              placeholder="Give your list a name..."
              onChange={this.onInputType}
              value={this.state.listName}
            />
            <Button
              type="submit"
              style={{ marginTop: '10px', marginRight: '10px' }}
            >
              Save
            </Button>
          </StyledForm>
        )}
      </Mutation>
    )
  }
}

export default AddListForm
