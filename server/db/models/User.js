import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  googleId: {
    type: String,
    default: null
  },
  facebookId: {
    type: String,
    default: null
  },
  boards: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'board'
  }
})

const User = mongoose.model('user', userSchema)

export default User
