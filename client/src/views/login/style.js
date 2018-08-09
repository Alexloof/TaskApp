import styled from 'styled-components'

import Button from '../../components/Button'

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-top: 15%;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  color: #353535;
  word-spacing: 4px;
`

export const SubTitle = styled.h2`
  color: #909090;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`

export const FacebookBtn = styled(Button)`
  background: rgb(59, 89, 152);
  margin: 0 15px;
  box-shadow: none;
  &:hover {
    background: rgb(111, 137, 191);
  }
`

export const GoogleBtn = styled(Button)`
  background: rgb(234, 67, 53);
  margin: 0 15px;
  box-shadow: none;
  &:hover {
    background: rgb(249, 133, 124);
  }
`

export const Logo = styled.a`
  font-size: 35px;
  letter-spacing: -1.5px;
  text-decoration: none;
  color: #ff6a2e;
  position: fixed;
  left: 0;
  top: 0;
  margin: 25px;
`
