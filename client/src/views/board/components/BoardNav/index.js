import React, { Component } from 'react'

import AddListForm from '../AddListForm'

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
        <Link>Add a list</Link>
        <Link>Invite members</Link>
        {/* <AddListForm boardId={_id} /> */}
      </Container>
    )
  }
}

export default BoardNav
