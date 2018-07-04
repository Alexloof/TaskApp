import Dataloader from 'dataloader'
import _ from 'lodash'

export default () =>
  new Dataloader(async objArray => {
    const model = objArray[0].model
    const field = objArray[0].field
    let offset
    let limit
    if (objArray[0].options) {
      offset = objArray[0].options.offset || ''
      limit = objArray[0].options.limit || ''
    }

    let ids
    let dataIsArray = false

    if (Array.isArray(objArray[0].data)) {
      ids = objArray[0].data
      dataIsArray = true
    } else {
      ids = objArray.map(obj => obj.data)
    }

    let query = {}
    query[field] = { $in: ids }
    const result = await model
      .find(query)
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

    if (dataIsArray) return [arrayObject]
    return arrayObject
  })
