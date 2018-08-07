export default async (parent, { id, from, to }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const taskListModel = ctx.db.model('taskList')

    const taskList = await taskListModel.findOne({ _id: id }).exec()

    if (taskList.order === to) return taskList

    if (taskList.order === from) {
      let goingDown = false
      if (from < to) {
        goingDown = true
      }

      if (goingDown) {
        await taskListModel
          .update(
            {
              board: taskList.board,
              order: { $gt: from, $lt: to + 1 }
            },
            {
              $inc: { order: -1 }
            },
            {
              multi: true
            }
          )
          .exec()
      } else {
        await taskListModel
          .update(
            {
              board: taskList.board,
              order: { $gt: to - 1, $lt: from }
            },
            {
              $inc: { order: 1 }
            },
            {
              multi: true
            }
          )
          .exec()
      }

      const updatedTaskList = await taskListModel.findOneAndUpdate(
        { _id: id },
        {
          order: to
        },
        { new: true }
      )

      return updatedTaskList
    }

    throw new Error('No order change happend...')
  } catch (error) {
    throw new Error(error)
  }
}
