import React from 'react'

import { SideMenu, Title } from './style'
import Link from '../Link'

export default () => {
  return (
    <SideMenu>
      <Title>Boards</Title>
      <Link to="/">Private</Link>
      <Link to="/t">Family</Link>
      <Link to="/g">Work</Link>
      <Link to="/j">Others</Link>
    </SideMenu>
  )
}
