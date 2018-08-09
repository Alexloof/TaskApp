import gql from 'graphql-tag'

import GET_BOARD from 'api/queries/board/board'

export default gql`
  mutation addTaskList($boardId: ID!, $name: String!) {
    addTaskList(boardId: $boardId, name: $name) {
      _id
      name
      order
    }
  }
`

const fakeId = Math.round(Math.random() * -1000000)

export const addTaskListOptions = ({ _id, name }) => {
  return {
    optimisticResponse: {
      __typename: 'Mutation',
      addTaskList: {
        __typename: 'TaskList',
        _id: fakeId.toString(),
        name: name,
        order: 9999,
        tasks: []
      }
    },
    update: (cache, { data: { addTaskList } }) => {
      const { board } = cache.readQuery({
        query: GET_BOARD,
        variables: { id: _id }
      })

      const taskListExist = board.taskLists.filter(
        list => list._id === addTaskList._id
      )

      if (taskListExist.length === 0) {
        addTaskList.tasks = []

        board.taskLists = [...board.taskLists, addTaskList]
      }

      cache.writeQuery({
        query: GET_BOARD,
        variables: { id: _id },
        data: {
          board: {
            __typename: 'Board',
            ...board,
            taskLists: [...board.taskLists]
          }
        }
      })
    }
  }
}
