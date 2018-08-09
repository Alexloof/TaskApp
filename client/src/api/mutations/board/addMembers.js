import gql from 'graphql-tag'

import GET_BOARD from 'api/queries/board/board'

export default gql`
  mutation addMembers($boardId: ID!, $membersEmail: [String!]!) {
    addMembers(boardId: $boardId, membersEmail: $membersEmail) {
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

export const addMembersOptions = ({ _id }) => {
  return {
    update: (cache, { data: { addMembers } }) => {
      cache.writeQuery({
        query: GET_BOARD,
        variables: { id: _id },
        data: {
          board: {
            __typename: 'Board',
            ...addMembers,
            taskLists: []
          }
        }
      })
    }
  }
}
