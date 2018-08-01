import React, { Component, Fragment } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Query } from 'react-apollo'
import { withApollo } from 'react-apollo'

import USER_BOARD from 'api/queries/board/userBoard'
import REORDER_TASKLIST from 'api/mutations/taskList/reorderTaskList'

import { ListsWrapper } from './style'

import CardList from './components/CardList'
import BoardNav from './components/BoardNav'

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset + 1000 * Math.random()}`,
    content: `Vi ska fixa så att hela helvetet inte brakar lös. Samling imorgon kl 20.00. ÖKA!`
  }))

const getLists = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `list-${k}`,
    cards: getItems(10)
  }))

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

class Board extends Component {
  state = {
    lists: getLists(4)
  }

  getList = id => {
    let newList
    this.state.lists.forEach(list => {
      if (list.id === id) {
        newList = list
      }
    })
    return newList
  }

  onDragEnd = result => {
    const { source, destination, draggableId } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === '12345') {
        console.log('Körs här')
        console.log(this.props.client)
        console.log(source, destination)
        const newLists = reorder(
          this.state.lists,
          source.index,
          destination.index
        )
        this.setState({
          lists: newLists
        })

        this.props.client.mutate({
          mutation: REORDER_TASKLIST,
          variables: {
            id: draggableId,
            from: source.index,
            to: destination.index
          }
        })
      } else {
        const list = this.getList(source.droppableId)

        const cards = reorder(list.cards, source.index, destination.index)

        const state = { id: list.id, cards }

        let newLists = []
        let spot

        this.state.lists.forEach((list, index) => {
          if (list.id !== state.id) {
            newLists.push(list)
          } else {
            spot = index
          }
        })

        newLists.splice(spot, 0, state)

        this.setState({
          lists: [...newLists]
        })
      }
    } else {
      const result = move(
        this.getList(source.droppableId).cards,
        this.getList(destination.droppableId).cards,
        source,
        destination
      )

      let newLists = []
      this.state.lists.forEach(list => {
        if (result[list.id]) {
          newLists.push({ id: list.id, cards: result[list.id] })
        } else {
          newLists.push(list)
        }
      })

      this.setState({
        lists: newLists
      })
    }
  }

  render() {
    return (
      <Query query={USER_BOARD} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          return (
            <Fragment>
              {error && <h1>Could not find the board..., ${error}</h1>}
              {!loading &&
                !error && (
                  <DragDropContext onDragEnd={this.onDragEnd}>
                    <BoardNav board={data.userBoard} />
                    <Droppable
                      droppableId={'12345'}
                      direction="horizontal"
                      type="BOARD"
                    >
                      {(provided, snapshot) => (
                        <ListsWrapper innerRef={provided.innerRef}>
                          {/* {this.state.lists.map((list, index) => (
                            <CardList
                              key={list.id}
                              index={index}
                              id={list.id}
                              cards={list.cards}
                            />
                          ))} */}
                          {data.userBoard.taskLists.map(list => (
                            <CardList
                              key={list._id}
                              index={list.order}
                              _id={list._id}
                              cards={list.tasks}
                              boardMembers={data.userBoard.members}
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
