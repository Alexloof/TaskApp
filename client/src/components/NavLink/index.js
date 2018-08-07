import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default styled(NavLink)`
  color: #424242;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  padding: 8px 0px;
  transition: 0.25s all ease;
  &.active {
    color: white;
  }
  &:hover {
    color: #fffdb1;
  }
  &:focus {
    outline-style: initial;
  }
`
