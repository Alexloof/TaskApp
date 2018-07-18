import gql from 'graphql-tag'

export default gql`
  mutation reorderTaskList($id: ID!, $from: Int!, $to: Int!) {
    reorderTaskList(id: $id, from: $from, to: $to) {
      _id
      createdAt
      name
      order
      tasks {
        _id
        createdAt
        title
        description
        order
        members {
          _id
          name
        }
      }
    }
  }
`
