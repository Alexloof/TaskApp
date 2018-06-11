import React from 'react'
import styled from 'styled-components'

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

const Navbar = styled.nav`
  background: #7ef7d1;
  color: #656565;
  height: 50px;
  display: flex;
  line-height: 50px;
  padding: 0 2%;
  letter-spacing: 1px;
  font-weight: bold;
  box-shadow: 0px 2px 8px 0px #00000030;
`

const Logo = styled.div`
  font-size: 26px;
  letter-spacing: -1.5px;
  flex: 1;
`

const RightSection = styled.div`
  display: flex;
`

const Item = styled.a`
  color: red;
`
