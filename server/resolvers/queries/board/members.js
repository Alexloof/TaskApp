export default async ({ members }, args, { db, loaders }) => {
  try {
    const userModel = db.model('user')
    const hej = await loaders.users_ByIds.load({
      data: members,
      model: userModel,
      field: '_id'
    })

    console.log('WOW', hej.length)

    return hej
  } catch (error) {
    throw new Error(error)
  }
}
