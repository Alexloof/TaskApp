import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_MEMBERS from 'api/mutations/board/addMembers'

import { StyledForm, Title, SubTitle } from './style'

import { Button, Input } from 'components'

class AddMembersForm extends Component {
  state = {
    emails: [],
    emailInput: ''
  }

  onInputType = e => {
    this.setState({
      emailInput: e.target.value
    })
  }

  addInputToList = e => {
    e.preventDefault()
    const newEmails = [...this.state.emails, this.state.emailInput]
    this.setState({
      emails: newEmails,
      emailInput: ''
    })
  }

  render() {
    return (
      <Mutation
        mutation={ADD_MEMBERS}
        variables={{
          boardId: this.props.boardId,
          membersEmail: this.state.emails
        }}
      >
        {addMembers => (
          <StyledForm onSubmit={this.addInputToList}>
            <Title>Invite members</Title>
            <SubTitle>Email</SubTitle>
            <Input
              placeholder="Write a members email..."
              onChange={this.onInputType}
              value={this.state.emailInput}
            />
            {!!this.state.emails.length && (
              <Button
                type="button"
                onClick={() => console.log('ADD MEMBERS')}
                style={{ marginTop: '10px', marginRight: '10px' }}
              >
                Submit
              </Button>
            )}
          </StyledForm>
        )}
      </Mutation>
    )
  }
}

export default AddMembersForm
