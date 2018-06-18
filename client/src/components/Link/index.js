import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default styled(NavLink)`
  color: #424242;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 8px 0px;
  &.active {
    color: white;
  }
`
