export default async (parent, args, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const userModel = ctx.db.model('user')
    const boardModel = ctx.db.model('board')
    const user = await userModel.findOne({ _id: ctx.user }).lean()
    return await boardModel.find({ _id: { $in: user.boards } }).exec()
  } catch (error) {
    throw new Error(error)
  }
}
