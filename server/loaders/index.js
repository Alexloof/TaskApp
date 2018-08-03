import single from './single'
import multiple from './multiple'
import queryLoader from './queryLoader'

export default () => ({
  // make unique dataloaders - else Cache problem can occur

  user_ById: single(),
  users_ByIds: multiple(), // make a specific for this?
  boards_ByUser: multiple(),
  taskLists_ByBoard: multiple(),
  task_ById: single(),
  tasks_ByTaskList: multiple(),
  comments_ByTask: multiple(),

  queryLoader: queryLoader()
})
