import auth from './auth'
import board from './board'
import taskList from './taskList'

export default {
  Mutation: {
    ...auth,
    ...board,
    ...taskList
  }
}
