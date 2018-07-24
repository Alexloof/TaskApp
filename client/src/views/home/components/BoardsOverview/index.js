import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import {
  Container,
  BoardCard,
  Title,
  SubTitle,
  FlexGrid,
  CreateBoardLink
} from './style'

import { openModal } from '../../../../components/Modal'

import AddBoardForm from '../AddBoardForm'

class BoardsOverview extends Component {
  render() {
    return (
      <Container>
        <Title>Boards</Title>
        <SubTitle>
          Click on a Board to start make plans or <br /> create a new Board if
          you like so.
        </SubTitle>
        <CreateBoardLink onClick={() => openModal(<AddBoardForm />)}>
          Create new Board
        </CreateBoardLink>
        <FlexGrid>
          {this.props.boards.map(board => {
            return (
              <BoardCard
                onClick={() =>
                  this.props.history.push(`/app/boards/${board._id}`)
                }
              >
                {board.name}
              </BoardCard>
            )
          })}
        </FlexGrid>
      </Container>
    )
  }
}

export default withRouter(BoardsOverview)
