export default async (parent, { boardId, name }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const taskListModel = ctx.db.model('taskList')

    const listcount = await taskListModel
      .find({ board: boardId })
      .count()
      .exec()

    const taskList = await taskListModel.create({
      name,
      order: listcount,
      board: boardId
    })

    return taskList
  } catch (error) {
    throw new Error(error)
  }
}
