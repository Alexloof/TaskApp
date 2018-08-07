export default async (parent, { id, from, to, fromList, toList }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const taskModel = ctx.db.model('task')

    const task = await taskModel.findOne({ _id: id }).exec()

    if (task.order === to && task.taskList.toString() === toList) return task

    // reordering inside the same list
    if (fromList === toList) {
      if (task.order === from) {
        let goingDown = false
        if (from < to) {
          goingDown = true
        }

        if (goingDown) {
          await taskModel
            .update(
              {
                taskList: task.taskList,
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
          await taskModel
            .update(
              {
                taskList: task.taskList,
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

        const updatedTask = await taskModel.findOneAndUpdate(
          { _id: id },
          {
            order: to
          },
          { new: true }
        )

        return updatedTask
      }

      // if task is moved to a different list
    } else {
      await taskModel
        .update(
          {
            taskList: fromList,
            order: { $gt: from }
          },
          {
            $inc: { order: -1 }
          },
          {
            multi: true
          }
        )
        .exec()

      await taskModel
        .update(
          {
            taskList: toList,
            order: { $gt: to - 1 }
          },
          {
            $inc: { order: 1 }
          },
          {
            multi: true
          }
        )
        .exec()

      const updatedTask = await taskModel.findOneAndUpdate(
        { _id: id },
        {
          order: to,
          taskList: toList
        },
        { new: true }
      )

      return updatedTask
    }

    throw new Error(
      'Something strange happend when you were trying to reorder the task...'
    )
  } catch (error) {
    throw new Error(error)
  }
}
