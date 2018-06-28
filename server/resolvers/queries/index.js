import { merge } from 'lodash'

import user from './user'
import auth from './auth'

// use merge here to avoid overriding
export default merge(user, auth)
