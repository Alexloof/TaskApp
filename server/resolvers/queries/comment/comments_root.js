export default async (parent, { taskId }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const commentModel = ctx.db.model('comment')
    return await commentModel.find({ task: taskId }).exec()
  } catch (error) {
    throw new Error(error)
  }
}
