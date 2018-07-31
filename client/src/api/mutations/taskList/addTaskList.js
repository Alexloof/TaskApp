import gql from 'graphql-tag'

export default gql`
  mutation addTaskList($boardId: ID!, $name: String!) {
    addTaskList(boardId: $boardId, name: $name) {
      _id
      createdAt
      name
      order
    }
  }
`
