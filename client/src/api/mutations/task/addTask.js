import gql from 'graphql-tag'

export default gql`
  mutation addTask($taskListId: ID!, $title: String!) {
    addTask(taskListId: $taskListId, title: $title) {
      _id
      createdAt
      description
      title
    }
  }
`
