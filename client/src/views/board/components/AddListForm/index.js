import React, { Component, Fragment } from 'react'

import { StyledForm } from './style'

import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import Icon from '../../../../components/Icon'

class AddListForm extends Component {
  state = {
    listName: '',
    showForm: false
  }

  addNewList = e => {
    e.preventDefault()
    console.log('ADD LIST', this.state.listName)

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
      <Fragment>
        {!this.state.showForm && (
          <Button onClick={this.toggleForm}>Add a new list...</Button>
        )}
        {this.state.showForm && (
          <StyledForm
            onSubmit={this.addNewList}
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
    )
  }
}

export default AddListForm
