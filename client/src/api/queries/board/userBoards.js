import gql from 'graphql-tag'

export default gql`
  query userBoards {
    userBoards {
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
