export default async (parent, { taskId, userId }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const taskModel = ctx.db.model('task')

    const task = await taskModel.findOne({ _id: taskId }).exec()

    if (task) {
      task.members.forEach(user => {
        if (user == userId) {
          throw new Error('User already a member of the task')
        }
      })
    } else {
      throw new Error('Can not find the task')
    }

    const updatedTask = await taskModel.findOneAndUpdate(
      { _id: taskId },
      { members: [...task.members, userId] }
    )

    return updatedTask
  } catch (error) {
    throw new Error(error)
  }
}
