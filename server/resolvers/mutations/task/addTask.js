export default async (parent, { taskListId, title }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const taskModel = ctx.db.model('task')

    const taskCount = await taskModel
      .find({ taskList: taskListId })
      .count()
      .exec()

    const task = await taskModel.create({
      title,
      order: taskCount,
      taskList: taskListId
    })

    return task
  } catch (error) {
    throw new Error(error)
  }
}
