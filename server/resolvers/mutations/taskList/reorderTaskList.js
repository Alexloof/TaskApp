export default async (parent, { id, from, to }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const taskListModel = ctx.db.model('taskList')

    const taskList = await taskListModel.findOne({ _id: id }).exec()

    if (taskList.order === to) return taskList

    if (taskList.order === from) {
      const updatedTaskList = await taskListModel.findOneAndUpdate(
        { _id: id },
        {
          order: to
        }
      )

      return updatedTaskList
    }

    throw new Error('No order change happend...')
  } catch (error) {
    throw new Error(error)
  }
}
