export default async ({ members }, args, { db, loaders }) => {
  try {
    const userModel = db.model('user')
    return loaders.users_ByIds.load({
      data: members,
      model: userModel,
      field: '_id'
    })
  } catch (error) {
    throw new Error(error)
  }
}
