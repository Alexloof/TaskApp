import gql from 'graphql-tag'

import GET_BOARD from 'api/queries/board/board'

export default gql`
  mutation addTask($taskListId: ID!, $title: String!) {
    addTask(taskListId: $taskListId, title: $title) {
      _id
      createdAt
      description
      title
      order
    }
  }
`

const fakeId = Math.round(Math.random() * -1000000)

export const addTaskOptions = ({ boardId, taskListId, title }) => {
  return {
    optimisticResponse: {
      __typename: 'Mutation',
      addTask: {
        __typename: 'Task',
        _id: fakeId.toString(),
        createdAt: new Date(),
        description: '',
        title: title,
        order: 9999
      }
    },
    update: (cache, { data: { addTask } }) => {
      const { board } = cache.readQuery({
        query: GET_BOARD,
        variables: { id: boardId }
      })

      // takes a Reference of the taskList we want to update
      const updatedTaskList = board.taskLists.find(
        list => list._id === taskListId
      )

      // checkes if the newly created task already exist .
      // (dublication can appear when using optimistic res
      // together with subscriotions)
      const taskExist = updatedTaskList.tasks.filter(
        task => task._id === addTask._id
      )

      if (taskExist.length === 0) {
        addTask.members = []

        // mutate the reference (=== mutates the board)
        updatedTaskList.tasks = [...updatedTaskList.tasks, addTask]
      }

      cache.writeQuery({
        query: GET_BOARD,
        variables: { id: boardId },
        data: {
          board: {
            __typename: 'Board',
            ...board
          }
        }
      })
    }
  }
}
