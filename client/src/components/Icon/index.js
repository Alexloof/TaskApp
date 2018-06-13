import React from 'react'
import { Icon } from './style'

export default props => (
  <Icon {...props} style={props.style} className={`fas fa-${props.name}`} />
)
