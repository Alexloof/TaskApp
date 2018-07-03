import mongoose from 'mongoose'

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user'
  }
})

const Board = mongoose.model('board', boardSchema)

export default Board
