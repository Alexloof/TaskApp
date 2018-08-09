import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withApollo } from 'react-apollo'

import { Navbar, Logo, RightSection, LeftSection, Item } from './style'

import { Avatar } from 'components'

class Nav extends Component {
  logout = () => {
    const { client } = this.props

    client.resetStore().then(() => {
      localStorage.removeItem('token')

      // hard refresh to trigger "VANTA script"
      window.location.href = 'http://localhost:3000/login'
    })
  }
  render() {
    const {
      user: { avatar, name }
    } = this.props
    return (
      <Navbar>
        <LeftSection>
          <Logo href="/">TaskApp</Logo>
        </LeftSection>
        {name && (
          <RightSection>
            <Avatar size="28px" src={avatar} />
            <Item>{name}</Item>
            <Item onClick={this.logout}>Logout</Item>
          </RightSection>
        )}
      </Navbar>
    )
  }
}

export default withRouter(withApollo(Nav))
