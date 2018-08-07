import gql from 'graphql-tag'

export default gql`
  query user {
    user {
      _id
      name
      avatar
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
  }
`
