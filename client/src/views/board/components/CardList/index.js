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
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(providedDrag, snapshotDrag) => (
          <div
            ref={providedDrag.innerRef}
            {...providedDrag.draggableProps}
            {...providedDrag.dragHandleProps}
          >
            <Droppable droppableId={this.props.id} type="LIST">
              {(provided, snapshot) => (
                <ListContainer
                  innerRef={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <Title>Title</Title>
                  <MetaInfo>10 cards</MetaInfo>
                  <CardsWrapper>
                    {this.props.cards.map((card, index) => (
                      <Card key={card.id} {...card} index={index} />
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
