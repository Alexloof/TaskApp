import gql from 'graphql-tag'

export default gql`
  mutation addDescToTask($taskId: ID!, $description: String!) {
    addDescToTask(taskId: $taskId, description: $description) {
      _id
      createdAt
      description
      title
      order
    }
  }
`
