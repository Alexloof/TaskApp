import React, { Component } from 'react'

import {
  Container,
  Title,
  SubTitle,
  FacebookBtn,
  GoogleBtn,
  ButtonGroup
} from './style'

class Login extends Component {
  googleLogin = () => {
    console.log('login google')
    localStorage.setItem('token', 'adadadad')
    this.props.history.push('/')
  }

  facebookLogin = () => {
    console.log('login facebook')
    localStorage.setItem('token', 'adadadad')
    this.props.history.push('/')
  }

  render() {
    return (
      <Container>
        <Title>Sign in to get started</Title>
        <SubTitle>
          TaskApp is a place where you can plan your day, week or month. Or you
          maybe just want to make tasks. <br /> <br /> Sign in below to get
          started!
        </SubTitle>
        <ButtonGroup>
          <FacebookBtn onClick={this.facebookLogin}>
            <i
              style={{ color: 'white', marginRight: '15px' }}
              className="fab fa-facebook-f"
            />Login
          </FacebookBtn>
          <GoogleBtn onClick={this.googleLogin}>
            <i
              style={{ color: 'white', marginRight: '15px' }}
              className="fab fa-google"
            />Login
          </GoogleBtn>
        </ButtonGroup>
      </Container>
    )
  }
}

export default Login
