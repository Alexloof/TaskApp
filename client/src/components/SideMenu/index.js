import React from 'react'

import { SideMenu, Title, ShowButton } from './style'

import Link from '../Link'
import Icon from '../Icon'

export default ({ active, toggleSideMenu }) => {
  return (
    <SideMenu active={active}>
      <Title>Boards</Title>
      <Link to="/">Private</Link>
      <Link to="/t">Family</Link>
      <Link to="/g">Work</Link>
      <Link to="/j">Others</Link>
      <ShowButton onClick={toggleSideMenu}>
        {active ? (
          <Icon name="times" size="24px" style={{ marginLeft: '20px' }} />
        ) : (
          <Icon name="bars" size="20px" style={{ marginLeft: '24px' }} />
        )}
      </ShowButton>
    </SideMenu>
  )
}
