import auth from './auth'
import board from './board'
import taskList from './taskList'
import task from './task'
import comment from './comment'

export default {
  Mutation: {
    ...auth,
    ...board,
    ...taskList,
    ...task,
    ...comment
  }
}
