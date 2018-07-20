export default async (parent, { taskId, description }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const taskModel = ctx.db.model('task')

    const updatedTask = await taskModel
      .findOneAndUpdate({ _id: taskId }, { description }, { new: true })
      .exec()

    return updatedTask
  } catch (error) {
    throw new Error(error)
  }
}
