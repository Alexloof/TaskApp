import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { CardContainer, LowerSection, MembersGroup, Member } from './style'

import { Icon } from 'components'
import { openModal } from 'components/Modal'

import CardDetails from '../CardDetails'

class Card extends Component {
  render() {
    const { id, index, title, members } = this.props
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
              <MembersGroup>
                {members.map((member, index) => (
                  <Member
                    arrayLength={members.length}
                    index={index}
                    key={member._id}
                    src={member.avatar}
                  />
                ))}
              </MembersGroup>
            </LowerSection>
          </CardContainer>
        )}
      </Draggable>
    )
  }
}

export default Card
