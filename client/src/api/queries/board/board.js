import gql from 'graphql-tag'

export default gql`
  query board($id: ID!) {
    board(id: $id) {
      _id
      createdAt
      name
      members {
        _id
        name
        avatar
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
            avatar
          }
          comments {
            _id
            text
            createdAt
            user {
              _id
              name
              avatar
            }
          }
        }
      }
    }
  }
`
