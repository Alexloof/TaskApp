import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'

import ADD_USERS_TO_TASK from 'api/mutations/task/addUsersToTask'

import { MembersGroup, MemberBox, MemberListItem } from './style'

import { Avatar, Button, Icon } from 'components'

export default class CardMembers extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
      const newTaskMembers = taskMembers.filter(
        (member, index) => taskMembers[index] !== memberId
      )

      this.setState({ taskMembers: newTaskMembers })
    }
  }

  onAddUsers = addUsersToTask => {
    addUsersToTask()
    this.setState({ showAddMemberBox: false })
  }

  render() {
    const { showAddMemberBox, taskMembers } = this.state
    const { taskId, boardMembers } = this.props

    return (
      <Mutation
        mutation={ADD_USERS_TO_TASK}
        variables={{ taskId, userIds: taskMembers }}
      >
        {addUsersToTask => (
          <Fragment>
            <MembersGroup>
              {this.props.taskMembers.map(member => (
                <Avatar key={member._id} src={member.avatar} />
              ))}
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
              <Fragment>
                <MemberBox>
                  {boardMembers.map(member => {
                    const alreadyMember = taskMembers.includes(member._id)
                    return (
                      <MemberListItem
                        alreadyMember={alreadyMember}
                        onClick={() => this.onToggleMember(member._id)}
                        key={member._id}
                      >
                        {member.name}
                        {alreadyMember && <Icon name="check" size="17px" />}
                      </MemberListItem>
                    )
                  })}
                </MemberBox>
                <Button onClick={() => this.onAddUsers(addUsersToTask)}>
                  Save
                </Button>
              </Fragment>
            )}
          </Fragment>
        )}
      </Mutation>
    )
  }
}
