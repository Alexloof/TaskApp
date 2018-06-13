import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Card from '../Card'

import { ListContainer, Title, MetaInfo } from './style'

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
            {this.props.cards.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
            Add a card...
          </ListContainer>
        )}
      </Droppable>
    )
  }
}

export default CardList
