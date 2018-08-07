import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  color: #424242;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 0px;
  transition: 0.25s all ease;
  &:hover {
    color: #fffdb1;
  }
  &:focus {
    outline-style: initial;
  }
`
