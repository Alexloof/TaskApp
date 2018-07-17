export default async (parent, { taskId, text }, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated')

    const commentModel = ctx.db.model('comment')

    const comment = await commentModel.create({
      text,
      user: ctx.user,
      task: taskId
    })

    //ctx.pubsub.publish('newComment', { newComment: comment })

    return comment
  } catch (error) {
    throw new Error(error)
  }
}
