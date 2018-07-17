import single from './single'
import multiple from './multiple'
import queryLoader from './queryLoader'

export default () => ({
  // make unique dataloaders - else Cache problem can occur

  user_ById: single(),
  users_ByIds: multiple(),
  boards_ByUser: multiple(),
  taskLists_ByBoard: multiple(),
  tasks_ByTaskList: multiple(),
  // comments_ByPost: multiple(),
  // comments_ByCommentedBy: multiple(),
  // likes_ByPost: multiple(),
  // likes_ByLikedBy: multiple(),
  // post_ById: single(),
  // posts_ByPostedBy: multiple(),

  queryLoader: queryLoader()
})
