import allUsers from './allUsers_root'
import currentUser from './currentUser_root'

import boards from './boards'

export default {
  Query: {
    allUsers,
    currentUser
  },
  User: {
    boards
  }
}
