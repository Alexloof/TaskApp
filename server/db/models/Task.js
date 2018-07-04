import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  order: {
    type: Number,
    required: true
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user'
  },
  taskList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'taskList',
    required: true
  }
})

const Task = mongoose.model('task', taskSchema)

export default Task
