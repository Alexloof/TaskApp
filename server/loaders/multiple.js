import Dataloader from 'dataloader'
import _ from 'lodash'

export default () =>
  new Dataloader(async objArray => {
    const model = objArray[0].model
    const field = objArray[0].field
    let offset
    let limit
    let sort
    if (objArray[0].options) {
      offset = objArray[0].options.offset || ''
      limit = objArray[0].options.limit || ''
      sort = objArray[0].options.sort || ''
    }

    let ids = []
    let dataIsArray = false

    console.log('LÄNGD', objArray.length)

    if (Array.isArray(objArray[0].data)) {
      // NOT FINISHED
      dataIsArray = true

      // push an empty item if data is empty to keep the array length the same (dataloader)
      objArray.forEach(obj => {
        console.log('OBJ', obj.data)
        if (!!obj.data.length) {
          obj.data.forEach(id => ids.push(id))
        } else {
          ids.push([])
        }
      })
    } else {
      ids = objArray.map(obj => obj.data)
    }
    console.log('IDS', ids)

    let query = {}
    query[field] = { $in: ids }
    const result = await model
      .find(query)
      .sort(sort)
      .skip(offset)
      .limit(limit)
      .exec()

    const resultById = _.keyBy(result, '_id')

    const arrayObject = ids.map(id => {
      let array = []

      for (let key in resultById) {
        let obj = resultById[key]

        if (JSON.stringify(obj[field]) == JSON.stringify(id)) {
          array.push(obj)
        }
      }
      return array
    })

    console.log('OUTPUT LÄNGD', arrayObject.length)

    // cant return an empty result when using dataloaders (output need same length as input)
    if (dataIsArray && !!!arrayObject.length) return [arrayObject]

    return arrayObject
  })
