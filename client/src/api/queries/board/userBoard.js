import gql from 'graphql-tag'

export default gql`
  query userBoard($id: ID!) {
    userBoard(id: $id) {
      _id
      createdAt
      name
      members {
        _id
        name
      }
      taskLists {
        _id
        name
        order
        tasks {
          _id
          title
          order
          description
          members {
            _id
            name
          }
          comments {
            _id
            text
          }
        }
      }
    }
  }
`
