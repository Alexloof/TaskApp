import members from './members'
import taskLists from './taskLists'

import userBoard from './userBoard_root'
import userBoards from './userBoards_root'

export default {
  Board: {
    members,
    taskLists
  },
  Query: {
    userBoard,
    userBoards
  }
}
