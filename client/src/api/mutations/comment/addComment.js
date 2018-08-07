import gql from 'graphql-tag'

export default gql`
  mutation addComment($taskId: ID!, $text: String!) {
    addComment(taskId: $taskId, text: $text) {
      _id
      text
      createdAt
      user {
        _id
        name
        avatar
      }
    }
  }
`
