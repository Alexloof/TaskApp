export default async (parent, { taskId, userIds }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const taskModel = ctx.db.model('task')

    return await taskModel.findOneAndUpdate(
      { _id: taskId },
      { members: [userIds] }
    )
  } catch (error) {
    throw new Error(error)
  }
}
