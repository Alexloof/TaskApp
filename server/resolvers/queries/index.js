import { merge } from 'lodash'

import user from './user'
import auth from './auth'
import board from './board'
import taskList from './taskList'
import task from './task'
import comment from './comment'

// use merge here to avoid overriding
export default merge(user, auth, board, taskList, task, comment)
