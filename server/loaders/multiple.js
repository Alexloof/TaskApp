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

    let exp = []

    if (Array.isArray(objArray[0].data)) {
      // NOT FINISHED
      dataIsArray = true

      // push an empty item if data is empty to keep the array length the same (dataloader)
      objArray.forEach((obj, index) => {
        if (!!obj.data.length) {
          obj.data.forEach(id => {
            ids.push(id)
          })
          exp.push({ index, length: obj.data.length })
        } else {
          ids.push([])
          exp.push({ index, length: 0 })
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

    let arrayObject = []
    ids.forEach(id => {
      for (let key in resultById) {
        let obj = resultById[key]

        if (JSON.stringify(obj[field]) == JSON.stringify(id)) {
          arrayObject.push(obj)
        }
      }
    })
    console.log('Exp', exp)
    console.log('array', arrayObject)

    let currentLength = 0
    exp.forEach(expItem => {
      if (expItem.length > 1) {
        const copyArray = [...arrayObject]
        console.log('copyArray', copyArray)
        const newItem = copyArray.slice(currentLength, 2)
        console.log('SE HÄR', newItem)
        arrayObject.splice(currentLength, 2)
        arrayObject.splice(currentLength, 0, newItem)
      }
      currentLength = currentLength + expItem.length
    })
    console.log('newArray', arrayObject)
    console.log('crtLength', currentLength)
    console.log('OUTPUT LÄNGD', arrayObject.length)

    // cant return an empty result when using dataloaders (output need same length as input)
    if (dataIsArray && !!!arrayObject.length) return [arrayObject]

    return arrayObject
  })
