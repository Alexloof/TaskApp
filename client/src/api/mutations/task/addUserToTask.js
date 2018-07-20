import gql from 'graphql-tag'

export default gql`
  mutation addUserToTask($taskId: ID!, $userId: ID!) {
    addUserToTask(taskId: $taskId, userId: $userId) {
      _id
      createdAt
      description
      title
    }
  }
`
