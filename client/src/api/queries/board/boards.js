import gql from 'graphql-tag'

export default gql`
  query boards {
    boards {
      _id
      createdAt
      name
      members {
        _id
        name
        avatar
      }
    }
  }
`
