export default async ({ boards }, args, { db, loaders }) => {
  try {
    const boardModel = db.model('board')
    return loaders.boards_ByUser.load({
      data: boards,
      model: boardModel,
      field: '_id'
    })
  } catch (error) {
    throw new Error(error)
  }
}
