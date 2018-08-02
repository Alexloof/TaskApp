export default async (parent, { boardId, membersEmail }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const boardModel = ctx.db.model('board')
    const userModel = ctx.db.model('user')

    const board = await boardModel.findOne({ _id: boardId }).exec()

    if (!board) throw new Error('Could not find the board')

    const users = await userModel.find({ email: { $in: membersEmail } }).exec()

    let userIdsToAdd = []

    users.forEach(async user => {
      let alreadyMember = false

      user.boards.forEach(b => {
        if (b.toString() === boardId) {
          alreadyMember = true
        }
      })

      if (!alreadyMember) {
        userIdsToAdd.push(user._id)

        await userModel.findOneAndUpdate(
          { _id: user._id },
          { boards: [...user.boards, boardId] }
        )
      }
    })

    const newBoard = await boardModel.findOneAndUpdate(
      { _id: boardId },
      { members: [...board.members, ...userIdsToAdd] },
      { new: true }
    )

    console.log(newBoard)

    return newBoard
  } catch (error) {
    throw new Error(error)
  }
}
