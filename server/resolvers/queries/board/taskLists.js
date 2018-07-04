export default async ({ _id }, args, { db, loaders }) => {
  try {
    const taskListModel = db.model('taskList')
    return loaders.taskLists_ByBoard.load({
      data: _id,
      model: taskListModel,
      field: 'board'
    })
  } catch (error) {
    throw new Error(error)
  }
}
