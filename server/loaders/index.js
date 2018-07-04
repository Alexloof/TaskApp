import single from './single'
import multiple from './multiple'
import queryLoader from './queryLoader'

export default () => ({
  // make unique dataloaders - else Cache problem can occur

  user_ById: single(),
  boards_ByUser: multiple(),
  users_ByIds: multiple(),
  taskLists_ByBoard: multiple(),
  // comments_ByPost: multiple(),
  // comments_ByCommentedBy: multiple(),
  // likes_ByPost: multiple(),
  // likes_ByLikedBy: multiple(),
  // post_ById: single(),
  // posts_ByPostedBy: multiple(),

  queryLoader: queryLoader()
})
