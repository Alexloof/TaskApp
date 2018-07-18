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
    const { id, index, cards, name } = this.props

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
                  <MetaInfo>10 cards</MetaInfo>
                  <CardsWrapper>
                    {cards.map(card => (
                      <Card key={card._id} {...card} index={card.order} />
                    ))}
                    {provided.placeholder}
                  </CardsWrapper>
                  <AddCardLink
                    onClick={() => openModal(<AddCardForm {...this.props} />)}
                  >
                    Add a card...
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
