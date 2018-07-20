import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import Card from '../Card'
import AddCardForm from '../AddCardForm'

import { openModal } from '../../../../components/Modal'

import {
  ListContainer,
  Title,
  MetaInfo,
  CardsWrapper,
  AddCardLink
} from './style'

class CardList extends Component {
  render() {
    const { id, index, cards, name, boardMembers } = this.props

    return (
      <Draggable draggableId={id} index={index}>
        {(providedDrag, snapshotDrag) => (
          <div
            ref={providedDrag.innerRef}
            {...providedDrag.draggableProps}
            {...providedDrag.dragHandleProps}
          >
            <Droppable droppableId={id} type="LIST">
              {(provided, snapshot) => (
                <ListContainer
                  innerRef={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <Title>{name}</Title>
                  <MetaInfo>{cards.length} tasks</MetaInfo>
                  <CardsWrapper>
                    {cards.map(card => (
                      <Card
                        key={card._id}
                        {...card}
                        index={card.order}
                        boardMembers={boardMembers}
                      />
                    ))}
                    {provided.placeholder}
                  </CardsWrapper>
                  <AddCardLink
                    onClick={() => openModal(<AddCardForm {...this.props} />)}
                  >
                    Add a task...
                  </AddCardLink>
                </ListContainer>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    )
  }
}

export default CardList
