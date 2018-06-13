import React from 'react'

import { SideMenu, Title } from './style'
import Link from '../Link'

export default () => {
  return (
    <SideMenu>
      <Title>Boards</Title>
      <Link to="/">hej</Link>
      <Link to="/t">hej</Link>
      <Link to="/g">hej</Link>
      <Link to="/j">hej</Link>
    </SideMenu>
  )
}
