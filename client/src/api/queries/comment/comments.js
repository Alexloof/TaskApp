import gql from 'graphql-tag'

export default gql`
  query comments($taskId: ID!) {
    comments(taskId: $taskId) {
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
