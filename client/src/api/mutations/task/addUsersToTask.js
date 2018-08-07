import gql from 'graphql-tag'

export default gql`
  mutation addUsersToTask($taskId: ID!, $userIds: [ID]) {
    addUsersToTask(taskId: $taskId, userIds: $userIds) {
      _id
      createdAt
      description
      title
      order
    }
  }
`
