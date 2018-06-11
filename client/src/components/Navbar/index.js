import React from 'react'

import { Navbar, Logo, RightSection, Item } from './style'

export default () => {
  return (
    <Navbar>
      <Logo>TaskApp</Logo>
      <RightSection>
        <Item>Alexander</Item>
        <Item>Logout</Item>
      </RightSection>
    </Navbar>
  )
}
