import gql from 'graphql-tag'

export default gql`
  mutation addBoard($name: String!) {
    addBoard(name: $name) {
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
