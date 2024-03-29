export default async ({ _id }, args, { db, loaders }) => {
  try {
    const taskModel = db.model('task')
    return loaders.tasks_ByTaskList.load({
      data: _id,
      model: taskModel,
      field: 'taskList',
      options: {
        sort: 'order'
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}
