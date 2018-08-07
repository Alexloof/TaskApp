export default async (parent, { id }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const userModel = ctx.db.model('user')
    const boardModel = ctx.db.model('board')
    const user = await userModel.findOne({ _id: ctx.user }).lean()
    const board = await boardModel.findOne({ _id: id }).exec()
    if (board) {
      let access = false
      user.boards.forEach(boardId => {
        if (JSON.stringify(boardId) == JSON.stringify(board._id)) {
          access = true
        }
      })
      if (access) {
        return board
      } else {
        throw new Error("You don't have access to this board")
      }
    }

    throw new Error('Could not find the board you were searching for')
  } catch (error) {
    throw new Error(error)
  }
}
