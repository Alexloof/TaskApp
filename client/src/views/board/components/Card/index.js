import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { CardContainer } from './style'

class Card extends Component {
  render() {
    const { id, index } = this.props
    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <CardContainer
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            style={provided.draggableProps.style}
          >
            {id}
          </CardContainer>
        )}
      </Draggable>
    )
  }
}

export default Card
