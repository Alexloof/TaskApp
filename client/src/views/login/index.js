import React, { Component } from 'react'

import {
  Container,
  Title,
  SubTitle,
  FacebookBtn,
  GoogleBtn,
  ButtonGroup,
  Logo
} from './style'

class Login extends Component {
  state = {
    vantaActive: false
  }
  componentDidMount() {
    setInterval(() => {
      if (window.VANTA && this.state.vantaActive === false) {
        this.activateVanta()
      }
    }, 500)
  }

  activateVanta = () => {
    this.setState({
      vantaActive: true
    })

    window.VANTA.DOTS({
      el: '#body',
      color: 0x0bd0be,
      backgroundColor: 0xffffff,
      size: 2.8,
      spacing: 41.0
    })
  }

  googleLogin = () => {
    console.log('login google')
    window.location.href = 'http://localhost:4000/auth/google'
  }

  facebookLogin = () => {
    console.log('login facebook')
  }

  render() {
    return (
      <Container>
        <Logo href="/">TaskApp</Logo>
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
            />
            Login
          </FacebookBtn>
          <GoogleBtn onClick={this.googleLogin}>
            <i
              style={{ color: 'white', marginRight: '15px' }}
              className="fab fa-google"
            />
            Login
          </GoogleBtn>
        </ButtonGroup>
      </Container>
    )
  }
}

export default Login
