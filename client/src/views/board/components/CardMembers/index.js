import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'

import ADD_USER_TO_TASK from '../../../../api/mutations/task/addUserToTask'

import { MembersGroup, MemberBox, MemberListItem } from './style'

import Icon from '../../../../components/Icon'
import Avatar from '../../../../components/Avatar'

export default class CardMembers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedUserId: '',
      showAddMemberBox: false,
      taskMembers: this.setInitTaskMembers(props.taskMembers)
    }
  }

  setInitTaskMembers = taskMembers => {
    return taskMembers.map(member => member._id)
  }

  onToggleMember = memberId => {
    const { taskMembers } = this.state

    if (!taskMembers.includes(memberId)) {
      this.setState({ taskMembers: [...taskMembers, memberId] })
    } else {
      const newTaskMembers = taskMembers.map((member, index) => {
        if (taskMembers[index] !== memberId) {
          return member
        }
      })
      this.setState({ taskMembers: newTaskMembers })
    }
  }

  onAddUser = addUserToTask => {
    console.log('add user')
    if (this.state.selectedUserId) {
      addUserToTask()
    }
  }

  render() {
    const { selectedUserId, showAddMemberBox, taskMembers } = this.state
    const { taskId, boardMembers } = this.props

    return (
      <Mutation
        mutation={ADD_USER_TO_TASK}
        variables={{ taskId, userId: selectedUserId }}
      >
        {(addUserToTask, { loading, error, data }) => (
          <Fragment>
            <MembersGroup>
              <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
              <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
              <Icon
                size="17px"
                name="plus"
                onClick={() =>
                  this.setState({ showAddMemberBox: !showAddMemberBox })
                }
                style={{ cursor: 'pointer', marginLeft: '5px' }}
              />
            </MembersGroup>
            {showAddMemberBox && (
              <MemberBox>
                {boardMembers.map(member => {
                  return (
                    <MemberListItem
                      alreadyMember={taskMembers.includes(member._id)}
                      onClick={() => this.onToggleMember(member._id)}
                      key={member._id}
                    >
                      {member.name}
                    </MemberListItem>
                  )
                })}
              </MemberBox>
            )}
          </Fragment>
        )}
      </Mutation>
    )
  }
}
