import gql from 'graphql-tag'

import GET_USER from '../../queries/user/user'

export default gql`
  mutation addBoard($name: String!) {
    addBoard(name: $name) {
      _id
      createdAt
      name
    }
  }
`

export const addBoardOptions = ({ name }) => {
  return {
    optimisticResponse: {
      __typename: 'Mutation',
      addBoard: {
        __typename: 'Board',
        _id: -1,
        createdAt: new Date(),
        name: name
      }
    },
    update: (cache, { data: { addBoard } }) => {
      const { user } = cache.readQuery({
        query: GET_USER
      })

      user.boards = [...user.boards, addBoard]

      cache.writeQuery({
        query: GET_USER,
        data: {
          user: {
            __typename: 'User',
            _id: user._id,
            name: user.name,
            avatar: user.avatar,
            boards: [...user.boards]
          }
        }
      })
    }
  }
}
