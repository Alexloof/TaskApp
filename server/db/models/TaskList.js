import mongoose from 'mongoose'

const taskListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  order: {
    type: Number,
    required: true
  }
})

const TaskList = mongoose.model('tastList', taskListSchema)

export default TaskList
