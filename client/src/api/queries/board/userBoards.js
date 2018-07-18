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
      }
      taskLists {
        _id
        name
        tasks {
          _id
          title
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
