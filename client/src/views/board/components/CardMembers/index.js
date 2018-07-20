import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_USER_TO_TASK from '../../../../api/mutations/task/addUserToTask'

import { MembersGroup } from './style'

import Icon from '../../../../components/Icon'
import Avatar from '../../../../components/Avatar'

export default class CardMembers extends Component {
  state = {
    selectedUserId: ''
  }

  onAddUser = addUserToTask => {
    console.log('add user')
    if (this.state.selectedUserId) {
      addUserToTask()
    }
  }

  render() {
    const { selectedUserId } = this.state
    const { taskId } = this.props

    return (
      <Mutation
        mutation={ADD_USER_TO_TASK}
        variables={{ taskId, userId: selectedUserId }}
      >
        {(addUserToTask, { loading, error, data }) => (
          <MembersGroup>
            <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
            <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
            <Icon
              size="17px"
              name="plus"
              onClick={() => this.onAddUser(addUserToTask)}
              style={{ cursor: 'pointer', marginLeft: '5px' }}
            />
          </MembersGroup>
        )}
      </Mutation>
    )
  }
}
