import auth from './auth'
import board from './board'
import taskList from './taskList'
import task from './task'

export default {
  Mutation: {
    ...auth,
    ...board,
    ...taskList,
    ...task
  }
}
