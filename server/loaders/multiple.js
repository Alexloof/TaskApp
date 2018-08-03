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
    let dataLengthMapper = []
    console.log('INPUT LÄNGD', objArray.length)
    // if incomming data is an array we have to loop over it to get the ID
    if (Array.isArray(objArray[0].data)) {
      dataIsArray = true

      objArray.forEach((obj, index) => {
        if (!!obj.data.length) {
          obj.data.forEach(id => {
            ids.push(id)
          })
          dataLengthMapper.push({ index, length: obj.data.length })
        } else {
          // push an empty item if data is empty to keep the array length the same (dataloader)
          ids.push([])
          dataLengthMapper.push({ index, length: 0 })
        }
      })
    } else {
      ids = objArray.map(obj => obj.data)
    }

    let query = {}
    query[field] = { $in: ids }
    const result = await model
      .find(query)
      .sort(sort)
      .skip(offset)
      .limit(limit)
      .exec()

    const resultById = _.keyBy(result, '_id')

    // let arrayObject = []
    const arrayObject = ids.map(id => {
      let arr = []
      for (let key in resultById) {
        let obj = resultById[key]

        if (JSON.stringify(obj[field]) == JSON.stringify(id)) {
          arr.push(obj)
        }
      }
      return arr
    })
    console.log(arrayObject)
    console.log(dataLengthMapper)
    let currentLength = 0
    const copyArray = [...arrayObject]
    dataLengthMapper.forEach(item => {
      if (item.length > 1) {
        const instanceArray = [...copyArray]

        const newItem = instanceArray.slice(
          currentLength,
          currentLength + item.length
        )
        const flattenItem = flatten(newItem)

        console.log('FLATTEN ITEM', flattenItem)
        console.log('HUR?', arrayObject)
        const spliceStart = currentLength === 0 ? 0 : currentLength - 1
        const spliceEnd = currentLength + item.length - 1

        arrayObject.splice(spliceStart, spliceEnd)
        console.log('FÖRE', arrayObject)
        arrayObject.splice(currentLength, 0, flattenItem)
        console.log('EFTER', arrayObject)
      }
      currentLength = currentLength + item.length
    })
    console.log('result', arrayObject)
    console.log('OUTPUT LÄNGD', arrayObject.length)
    // cant return an empty result when using dataloaders (output need same length as input)
    if (dataIsArray && !!!arrayObject.length) return [arrayObject]

    return arrayObject
  })

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    )
  }, [])
}
