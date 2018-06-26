import React from 'react'

import { Navbar, Logo, RightSection, LeftSection, Item } from './style'

import Avatar from '../Avatar'

export default () => {
  return (
    <Navbar>
      <LeftSection>
        <Logo href="/">TaskApp</Logo>
      </LeftSection>
      <RightSection>
        <Avatar src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/33216184_10216407330119668_6677425877459927040_n.jpg?_nc_cat=0&oh=2789687e55f5422d4b59c3dc7c6209bf&oe=5BB96348" />
        <Item>Alexander</Item>
        <Item>Logout</Item>
      </RightSection>
    </Navbar>
  )
}
