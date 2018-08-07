import styled from 'styled-components'

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Comment = styled.li`
  background: whitesmoke;
  padding: 10px;
  display: flex;
  margin: 6px 0px;
  border-radius: 10px;
  &:first-child {
    margin-top: 0px;
  }
`

Comment.UserName = styled.div`
  color: blue;
`

Comment.Time = styled.div`
  color: red;
`

Comment.Text = styled.div`
  color: green;
`
