import React, { Component, Fragment } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { Container, ListsWrapper } from './style'

import SideMenu from '../../components/SideMenu'
import CardList from './components/CardList'

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset + 1000 * Math.random()}`,
    content: `item ${k + offset}`
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
    lists: getLists(3)
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
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === '12345') {
        const newLists = reorder(
          this.state.lists,
          source.index,
          destination.index
        )
        this.setState({
          lists: newLists
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
      <Fragment>
        <SideMenu />
        <Container>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable
              droppableId={'12345'}
              direction="horizontal"
              type="BOARD"
            >
              {(provided, snapshot) => (
                <ListsWrapper innerRef={provided.innerRef}>
                  {this.state.lists.map((list, index) => (
                    <CardList
                      key={list.id}
                      index={index}
                      id={list.id}
                      cards={list.cards}
                    />
                  ))}
                </ListsWrapper>
              )}
            </Droppable>
            Add a list...
          </DragDropContext>
        </Container>
      </Fragment>
    )
  }
}

export default Board
