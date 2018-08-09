import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_MEMBERS, { addMembersOptions } from 'api/mutations/board/addMembers'

import { StyledForm, Title, SubTitle, MembersEmail, Email } from './style'

import { Button, Input, Icon } from 'components'
import { closeModal } from 'components/Modal'

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
    if (this.state.emailInput) {
      const newEmails = [...this.state.emails, this.state.emailInput]
      this.setState({
        emails: newEmails,
        emailInput: ''
      })
    }
  }

  onAddMembers = addMembers => {
    if (!!this.state.emails.length) {
      addMembers(addMembersOptions({ _id: this.props.boardId }))
      closeModal()
    }
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
              autoFocus
              placeholder="Write an email..."
              onChange={this.onInputType}
              value={this.state.emailInput}
            />

            <MembersEmail>
              {this.state.emails.map((email, index) => (
                <Email key={index}>
                  &#8226; {email} <Icon name="times" />
                </Email>
              ))}
            </MembersEmail>

            {!!this.state.emails.length && (
              <Button
                type="button"
                onClick={() => this.onAddMembers(addMembers)}
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
