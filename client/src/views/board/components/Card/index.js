import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { CardContainer, LowerSection } from './style'

import Icon from '../../../../components/Icon'
import Avatar from '../../../../components/Avatar'
import { openModal } from '../../../../components/Modal'

import CardDetails from '../CardDetails'

class Card extends Component {
  render() {
    const { id, index, title } = this.props
    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <CardContainer
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            style={provided.draggableProps.style}
            onClick={() => openModal(<CardDetails {...this.props} />)}
          >
            {title}
            <LowerSection>
              <Icon
                size="15px"
                name="align-left"
                style={{ marginRight: '10px' }}
              />
              <Icon size="17px" name="comments" style={{ flex: 1 }} />
              <Avatar src="https://media.licdn.com/dms/image/C5103AQF_PFTuP8_8xA/profile-displayphoto-shrink_200_200/0?e=1530298800&v=beta&t=LZM7EC9K127BDnzUoBU1_ehwwKEJWbwrSZg1yyuRjaM" />
              <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
            </LowerSection>
          </CardContainer>
        )}
      </Draggable>
    )
  }
}

export default Card
