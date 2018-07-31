import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'

import ADD_TASK_LIST from '../../../../api/mutations/taskList/addTaskList'

import { StyledForm } from './style'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import Icon from '../../../../components/Icon'

class AddListForm extends Component {
  state = {
    listName: '',
    showForm: false
  }

  addNewList = (e, addTaskList) => {
    e.preventDefault()

    addTaskList()
    this.setState({
      listName: '',
      showForm: false
    })
  }

  onInputType = e => {
    this.setState({
      listName: e.target.value
    })
  }

  toggleForm = () => {
    this.setState(
      {
        showForm: !this.state.showForm
      },
      () => {
        if (this.state.showForm) {
          document.addEventListener('mousedown', this.handleClick, false)
        } else {
          document.removeEventListener('mousedown', this.handleClick, false)
        }
      }
    )
  }

  handleClick = e => {
    if (this.formNode && !this.formNode.contains(e.target)) {
      this.handleClickOutside()
    }
  }

  handleClickOutside = () => {
    this.setState({
      showForm: false
    })
  }

  render() {
    return (
      <Mutation
        mutation={ADD_TASK_LIST}
        variables={{ name: this.state.listName, boardId: this.props.boardId }}
      >
        {addTaskList => (
          <Fragment>
            {!this.state.showForm ? (
              <Button onClick={this.toggleForm}>Add a new list...</Button>
            ) : (
              <StyledForm
                onSubmit={e => this.addNewList(e, addTaskList)}
                innerRef={node => (this.formNode = node)}
              >
                <Input
                  placeholder="Add a new list..."
                  onChange={this.onInputType}
                  value={this.state.listName}
                />
                <Button
                  type="submit"
                  style={{ marginTop: '10px', marginRight: '10px' }}
                >
                  Save
                </Button>
                <Icon
                  name="times"
                  size="30px"
                  style={{ cursor: 'pointer' }}
                  onClick={this.toggleForm}
                />
              </StyledForm>
            )}
          </Fragment>
        )}
      </Mutation>
    )
  }
}

export default AddListForm
