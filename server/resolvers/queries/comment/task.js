export default async ({ task }, args, { db, loaders }) => {
  try {
    const taskModel = db.model('task')
    return loaders.task_ById.load({
      data: task,
      model: taskModel,
      field: '_id'
    })
  } catch (error) {
    throw new Error(error)
  }
}
