import React, { Component } from 'react'

import {
  Container,
  Title,
  SubTitle,
  FacebookBtn,
  GoogleBtn,
  ButtonGroup
} from './style'

import Icon from '../../components/Icon'

class Login extends Component {
  render() {
    return (
      <Container>
        <Title>Sign in to get started</Title>
        <SubTitle>
          TaskApp is a place where you can plan your day, week or month. Or
          maybe just want to make tasks. <br /> <br /> Sign in below to get
          started!
        </SubTitle>
        <ButtonGroup>
          <FacebookBtn>
            <i
              style={{ color: 'white', marginRight: '15px' }}
              className="fab fa-facebook-f"
            />Login
          </FacebookBtn>
          <GoogleBtn>
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
