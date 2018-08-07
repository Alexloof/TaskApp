import React, { Component } from 'react'

import AddListForm from '../AddListForm'
import AddMembersForm from '../AddMembersForm'

import { Avatar } from 'components'
import { openModal } from 'components/Modal'

import { Container, Title, BoardMembers, Link } from './style'

class BoardNav extends Component {
  render() {
    const {
      board: { _id, name, members }
    } = this.props
    return (
      <Container>
        <Title>{name}</Title>
        <BoardMembers>
          {members.map(member => (
            <Avatar key={member._id} src={member.avatar} />
          ))}
        </BoardMembers>
        <Link onClick={() => openModal(<AddListForm boardId={_id} />)}>
          Add list
        </Link>
        <Link onClick={() => openModal(<AddMembersForm boardId={_id} />)}>
          Invite members
        </Link>
      </Container>
    )
  }
}

export default BoardNav
