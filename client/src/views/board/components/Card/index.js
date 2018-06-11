import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'

class Card extends Component {
  render() {
    const { id, index, content } = this.props
    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {id}
          </div>
        )}
      </Draggable>
    )
  }
}

export default Card
