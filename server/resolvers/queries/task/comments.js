export default async ({ _id }, args, { db, loaders }) => {
  try {
    const commentModel = db.model('comment')
    return loaders.comments_ByTask.load({
      data: _id,
      model: commentModel,
      field: 'task'
    })
  } catch (error) {
    throw new Error(error)
  }
}
