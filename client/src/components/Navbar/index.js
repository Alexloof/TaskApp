import React from 'react'
import { withRouter } from 'react-router-dom'
import { withApollo } from 'react-apollo'

import { Navbar, Logo, RightSection, LeftSection, Item } from './style'

import { Avatar } from 'components'

const logout = history => {
  this.props.client.resetStore().then(() => {
    localStorage.removeItem('token')
    history.push('/login')
  })
}

const Nav = ({ history }) => {
  return (
    <Navbar>
      <LeftSection>
        <Logo href="/">TaskApp</Logo>
      </LeftSection>
      <RightSection>
        <Avatar
          size="28px"
          src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/33216184_10216407330119668_6677425877459927040_n.jpg?_nc_cat=0&oh=2789687e55f5422d4b59c3dc7c6209bf&oe=5BB96348"
        />
        <Item>Alexander</Item>
        <Item onClick={() => logout(history)}>Logout</Item>
      </RightSection>
    </Navbar>
  )
}

export default withRouter(withApollo(Nav))
