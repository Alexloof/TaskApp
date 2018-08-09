import React, { Component, Fragment } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Query } from 'react-apollo'
import { withApollo } from 'react-apollo'
import { Trail, animated } from 'react-spring'

import GET_BOARD from 'api/queries/board/board'
import REORDER_TASKLIST from 'api/mutations/taskList/reorderTaskList'
import REORDER_TASK from 'api/mutations/task/reorderTask'

import { ListsWrapper } from './style'

import { Button } from 'components'
import { openModal } from 'components/Modal'

import CardList from './components/CardList'
import BoardNav from './components/BoardNav'
import AddListForm from './components/AddListForm'

class Board extends Component {
  onDragEnd = result => {
    const { source, destination, draggableId } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    // if the task does not move list (always happends for taskLists)

    if (source.droppableId === '12345') {
      this.props.client.mutate({
        mutation: REORDER_TASKLIST,
        variables: {
          id: draggableId,
          from: source.index,
          to: destination.index
        }
      })
    } else {
      this.props.client.mutate({
        mutation: REORDER_TASK,
        variables: {
          id: draggableId,
          from: source.index,
          to: destination.index,
          fromList: source.droppableId,
          toList: destination.droppableId
        }
      })
    }
  }

  render() {
    return (
      <Query query={GET_BOARD} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          return (
            <Fragment>
              {error && <h1>Could not find the board..., {error}</h1>}
              {!loading &&
                !error && (
                  <DragDropContext onDragEnd={this.onDragEnd}>
                    <BoardNav board={data.board} />
                    <Droppable
                      droppableId={'12345'}
                      direction="horizontal"
                      type="BOARD"
                    >
                      {(provided, snapshot) => (
                        <ListsWrapper innerRef={provided.innerRef}>
                          {!data.board.taskLists.length && (
                            <Button
                              onClick={() =>
                                openModal(
                                  <AddListForm boardId={data.board._id} />
                                )
                              }
                            >
                              Add you first list for tasks
                            </Button>
                          )}
                          <Trail
                            native
                            from={{ opacity: 0 }}
                            to={{ opacity: 1.2 }}
                            keys={data.board.taskLists.map(list => list._id)}
                          >
                            {data.board.taskLists.map(list => ({ opacity }) => (
                              <animated.div style={{ opacity }}>
                                <CardList
                                  key={list._id}
                                  index={list.order}
                                  _id={list._id}
                                  cards={list.tasks}
                                  boardMembers={data.board.members}
                                  name={list.name}
                                />
                              </animated.div>
                            ))}
                          </Trail>
                          {provided.placeholder}
                        </ListsWrapper>
                      )}
                    </Droppable>
                  </DragDropContext>
                )}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default withApollo(Board)
