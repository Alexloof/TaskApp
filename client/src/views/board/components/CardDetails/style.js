import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  position: relative;
  width: 700px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`

export const SubTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  span {
    color: #7a7a7a;
    text-decoration: underline;
    font-size: 14px;
    margin-left: 10px;
    font-weight: normal;
    cursor: pointer;
  }
`

export const MembersGroup = styled.div`
  display: flex;
  align-items: center;
`
