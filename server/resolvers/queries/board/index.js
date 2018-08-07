import members from './members'
import taskLists from './taskLists'

import board from './board_root'
import boards from './boards_root'

export default {
  Board: {
    members,
    taskLists
  },
  Query: {
    board,
    boards
  }
}
