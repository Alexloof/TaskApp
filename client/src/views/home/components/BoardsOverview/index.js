import React, { Component } from 'react'

import { Container, BoardCard, Title, SubTitle } from './style'

class BoardsOverview extends Component {
  render() {
    return (
      <Container>
        <Title>Boards</Title>
        {this.props.boards.map(board => {
          return <BoardCard>{board.name}</BoardCard>
        })}
      </Container>
    )
  }
}

export default BoardsOverview
