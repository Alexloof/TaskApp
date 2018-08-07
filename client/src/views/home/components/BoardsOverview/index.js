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

import { openModal, closeModal } from 'components/Modal'

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
        <CreateBoardLink
          onClick={() => openModal(<AddBoardForm closeModal={closeModal} />)}
        >
          Create new Board
        </CreateBoardLink>
        <FlexGrid>
          {this.props.boards.map(board => {
            return (
              <BoardCard
                key={board._id}
                onClick={() =>
                  this.props.history.push(`/app/boards/${board._id}`)
                }
                color={COLORS[Math.floor(Math.random() * COLORS.length)]}
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

const COLORS = [
  '#FDEB71',
  '#ABDCFF',
  'FEB692',
  '#CE9FFC',
  '#90F7EC',
  '#FFF6B7',
  '#81FBB8',
  '#E2B0FF',
  '#F97794',
  '#FCCF31',
  '#F761A1',
  '#43CBFF',
  '#5EFCE8',
  '#FAD7A1',
  '#FFD26F',
  '#A0FE65',
  '#FFDB01',
  '#FEC163',
  '#92FFC0'
]
