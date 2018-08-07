import allUsers from './allUsers_root'
import user from './user_root'

import boards from './boards'

export default {
  Query: {
    allUsers,
    user
  },
  User: {
    boards
  }
}
