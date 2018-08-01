import React, { Component } from 'react'

import AddListForm from '../AddListForm'

import { openModal } from 'components/Modal'

import { Container, Title, BoardMembers, Link } from './style'
import { Avatar } from 'components'

class BoardNav extends Component {
  render() {
    const {
      board: { _id, name }
    } = this.props
    return (
      <Container>
        <Title>{name}</Title>
        <BoardMembers>
          <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
          <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
        </BoardMembers>
        <Link onClick={() => openModal(<AddListForm boardId={_id} />)}>
          Add list
        </Link>
        <Link>Invite members</Link>
      </Container>
    )
  }
}

export default BoardNav
