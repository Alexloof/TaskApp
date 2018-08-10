import gql from 'graphql-tag'

import GET_BOARD from 'api/queries/board/board'

export default gql`
  mutation addDescToTask($taskId: ID!, $description: String!) {
    addDescToTask(taskId: $taskId, description: $description) {
      _id
      createdAt
      description
      title
      order
    }
  }
`

export const addDescToTaskOptions = ({ boardId, taskListId, taskId }) => {
  return {
    update: (cache, { data: { addDescToTask } }) => {
      const { board } = cache.readQuery({
        query: GET_BOARD,
        variables: { id: boardId }
      })

      // takes a Reference of the taskList we want to update
      const updatedTaskList = board.taskLists.find(
        list => list._id === taskListId
      )

      // takes a Reference of the task we want to update
      let updatedTask = updatedTaskList.tasks.find(task => task._id === taskId)

      updatedTask = addDescToTask

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
