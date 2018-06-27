import styled from 'styled-components'

import Button from '../../components/Button'

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  padding-top: 150px;
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
`

export const GoogleBtn = styled(Button)`
  background: rgb(234, 67, 53);
  margin: 0 15px;
  box-shadow: none;
`
