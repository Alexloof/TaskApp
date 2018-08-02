import gql from 'graphql-tag'

export default gql`
  mutation addMembers($boardId: ID!, $membersEmail: [String!]!) {
    addMembers(boardId: $boardId, membersEmail: $membersEmail) {
      _id
      createdAt
      name
      members {
        _id
        name
      }
    }
  }
`
