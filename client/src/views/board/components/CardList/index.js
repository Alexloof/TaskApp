import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Card from '../Card'

class CardList extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} style={{ marginBottom: '20px' }}>
            {this.props.cards.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    )
  }
}

export default CardList
