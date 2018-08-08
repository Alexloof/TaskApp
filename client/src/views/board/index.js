import React, { Component, Fragment } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Query } from 'react-apollo'
import { withApollo } from 'react-apollo'

import GET_BOARD from 'api/queries/board/board'
import REORDER_TASKLIST from 'api/mutations/taskList/reorderTaskList'
import REORDER_TASK from 'api/mutations/task/reorderTask'

import { ListsWrapper } from './style'

import { Button } from 'components'
import { openModal } from 'components/Modal'

import CardList from './components/CardList'
import BoardNav from './components/BoardNav'
import AddListForm from './components/AddListForm'

// const getItems = (count, offset = 0) =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k + offset + 1000 * Math.random()}`,
//     content: `Vi ska fixa så att hela helvetet inte brakar lös. Samling imorgon kl 20.00. ÖKA!`
//   }))

// const getLists = count =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `list-${k}`,
//     cards: getItems(10)
//   }))

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list)
//   const [removed] = result.splice(startIndex, 1)
//   result.splice(endIndex, 0, removed)

//   return result
// }

// const move = (source, destination, droppableSource, droppableDestination) => {
//   const sourceClone = Array.from(source)
//   const destClone = Array.from(destination)
//   const [removed] = sourceClone.splice(droppableSource.index, 1)

//   destClone.splice(droppableDestination.index, 0, removed)

//   const result = {}
//   result[droppableSource.droppableId] = sourceClone
//   result[droppableDestination.droppableId] = destClone

//   return result
// }

class Board extends Component {
  // state = {
  //   lists: getLists(4)
  // }

  // getList = id => {
  //   let newList
  //   this.state.lists.forEach(list => {
  //     if (list.id === id) {
  //       newList = list
  //     }
  //   })
  //   return newList
  // }

  onDragEnd = result => {
    const { source, destination, draggableId } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    // if the task does not move list (always happends for taskLists)
    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === '12345') {
        // OLD CODE
        // const newLists = reorder(
        //   this.state.lists,
        //   source.index,
        //   destination.index
        // )
        // this.setState({
        //   lists: newLists
        // })

        this.props.client.mutate({
          mutation: REORDER_TASKLIST,
          variables: {
            id: draggableId,
            from: source.index,
            to: destination.index
          }
        })
      } else {
        console.log('Körs här')
        console.log(source, destination)

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
        // const list = this.getList(source.droppableId)
        // const cards = reorder(list.cards, source.index, destination.index)
        // const state = { id: list.id, cards }
        // let newLists = []
        // let spot
        // this.state.lists.forEach((list, index) => {
        //   if (list.id !== state.id) {
        //     newLists.push(list)
        //   } else {
        //     spot = index
        //   }
        // })
        // newLists.splice(spot, 0, state)
        // this.setState({
        //   lists: [...newLists]
        // })
      }

      // if the task moves to a different list
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
      // const result = move(
      //   this.getList(source.droppableId).cards,
      //   this.getList(destination.droppableId).cards,
      //   source,
      //   destination
      // )

      // let newLists = []
      // this.state.lists.forEach(list => {
      //   if (result[list.id]) {
      //     newLists.push({ id: list.id, cards: result[list.id] })
      //   } else {
      //     newLists.push(list)
      //   }
      // })

      // this.setState({
      //   lists: newLists
      // })
    }
  }

  render() {
    return (
      <Query query={GET_BOARD} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          return (
            <Fragment>
              {error && <h1>Could not find the board..., ${error}</h1>}
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
                          {data.board.taskLists.map(list => (
                            <CardList
                              key={list._id}
                              index={list.order}
                              _id={list._id}
                              cards={list.tasks}
                              boardMembers={data.board.members}
                              name={list.name}
                            />
                          ))}
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
