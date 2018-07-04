export default async (parent, { name }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const boardModel = ctx.db.model('board')
    const userModel = ctx.db.model('user')

    const board = await boardModel.create({
      name,
      members: [ctx.user]
    })
    const user = await findOne({ _id: ctx.user }).exec()
    await userModel.findOneAndUpdate(
      { _id: ctx.user },
      { boards: [...user.boards, board._id] }
    )

    return board
  } catch (error) {
    throw new Error(error)
  }
}
