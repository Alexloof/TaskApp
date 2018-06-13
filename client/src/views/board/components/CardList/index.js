import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Card from '../Card'

import { ListContainer, Title, MetaInfo, CardsWrapper } from './style'

class CardList extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.id}>
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
            Add a card...
          </ListContainer>
        )}
      </Droppable>
    )
  }
}

export default CardList
