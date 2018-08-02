import styled from 'styled-components'

export const StyledForm = styled.form`
  padding: 20px;
  position: relative;
  width: 400px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`

export const SubTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
`

export const MembersEmail = styled.ul`
  margin-top: 15px;
  margin-bottom: 5px;
`

export const Email = styled.li`
  font-size: 15px;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`
