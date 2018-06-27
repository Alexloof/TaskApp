import React, { Component } from 'react'

import { Container, Title, SubTitle, FacebookBtn, GoogleBtn } from './style'

class Login extends Component {
  render() {
    return (
      <Container>
        <Title>Sign in to get started</Title>
        <SubTitle>
          TaskApp is a place where you can plan your day, week or month. Or
          maybe just make task and plans. <br /> Sign in below to get started
        </SubTitle>
        <FacebookBtn>Login</FacebookBtn>
        <GoogleBtn>Login</GoogleBtn>
      </Container>
    )
  }
}

export default Login
