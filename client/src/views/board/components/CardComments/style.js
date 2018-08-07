import styled from 'styled-components'

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 245px;
  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9a9a9a;
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
`

export const Comment = styled.li`
  border: 1px solid #eaeaea;
  padding: 10px 15px;
  display: flex;
  margin: 6px 0px;
  border-radius: 15px;
  flex-wrap: wrap;
  align-items: center;
  width: fit-content;
  min-height: fit-content;
  align-self: ${({ fromCurrentUser }) =>
    fromCurrentUser ? 'flex-end' : 'auto'};
  justify-content: ${({ fromCurrentUser }) =>
    fromCurrentUser ? 'flex-end' : 'auto'};
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`

Comment.Avatar = styled.div`
  order: ${({ fromCurrentUser }) => (fromCurrentUser ? '3' : 'initial')};
`

Comment.UserName = styled.div`
  font-size: 14px;
  padding: 0 5px;
  font-weight: 600;
  order: ${({ fromCurrentUser }) => (fromCurrentUser ? '2' : 'initial')};
`

Comment.Time = styled.div`
  color: #adadad;
  padding: 0 5px;
  font-size: 12px;
  order: ${({ fromCurrentUser }) => (fromCurrentUser ? '1' : 'initial')};
`

Comment.Text = styled.div`
  padding: 0 30px;
  flex: 1 100%;
  font-size: 14px;
  text-align: ${({ fromCurrentUser }) => (fromCurrentUser ? 'right' : 'auto')};
  order: ${({ fromCurrentUser }) => (fromCurrentUser ? '4' : 'initial')};
`
