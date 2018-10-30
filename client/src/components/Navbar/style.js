import styled from 'styled-components'

export const Navbar = styled.nav`
  background: white;
  color: #656565;
  height: 50px;
  display: flex;
  line-height: 50px;
  padding: 0 30px;
  letter-spacing: 1px;
  font-weight: bold;
  box-shadow: 0px 1px 2px 0px #00000030;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`

export const Logo = styled.a`
  font-size: 26px;
  letter-spacing: -1.5px;
  text-decoration: none;
  color: #ff6a2e;
`

export const LeftSection = styled.div`
  display: flex;
  flex: 1;
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.a`
  padding: 0 20px;
  font-size: 13px;
  cursor: pointer;
  padding-top: 2px;
`
