import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  height: 60px;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 15px;
  margin-top: 5px;
  margin-right: 80px;
`

export const Title = styled.h1`
  font-size: 20px;
`

export const BoardMembers = styled.div`
  display: flex;
  flex: 1;
  margin: 0 25px;
`

export const Link = styled.div`
  font-size: 15px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
