import React from 'react'

import { Navbar, Logo, RightSection, LeftSection, Item } from './style'

export default () => {
  return (
    <Navbar>
      <LeftSection>
        <Logo href="/">TaskApp</Logo>
      </LeftSection>
      <RightSection>
        <Item>Alexander</Item>
        <Item>Logout</Item>
      </RightSection>
    </Navbar>
  )
}
