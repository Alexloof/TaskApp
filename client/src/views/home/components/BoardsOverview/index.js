import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Trail, animated } from 'react-spring'

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
          <Trail
            native
            from={{ y: 150, opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
            keys={this.props.boards.map((board, i) => i)}
          >
            {this.props.boards.map((board, i) => ({ y, opacity }) => (
              // react spring bug? solved with a cond. in style tag
              <animated.div
                style={{
                  opacity,
                  transform: y.interpolate(y => `translate3d(0,${y}px,0)`)
                }}
              >
                <BoardCard
                  key={board._id}
                  onClick={() =>
                    this.props.history.push(`/app/boards/${board._id}`)
                  }
                >
                  {board.name}
                </BoardCard>
              </animated.div>
            ))}
          </Trail>
        </FlexGrid>
      </Container>
    )
  }
}

export default withRouter(BoardsOverview)
