import { merge } from 'lodash'

import user from './user'
import auth from './auth'
import board from './board'
import taskList from './taskList'

// use merge here to avoid overriding
export default merge(user, auth, board, taskList)
