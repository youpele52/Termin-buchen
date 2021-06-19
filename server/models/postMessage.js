import mongoose from 'mongoose'

// creating a  mongoose Schema
const postSchema = mongoose.Schema({
  customerName: {
    required: true,
    type: String,
  },
  day: { required: true, type: Date },
  time: {
    type: Number,
    required: true,
    min: 9,
    max: 20,
  },

  phoneNumber: {
    required: true,
    type: Number,
  },
  message: String,
  bookedAt: {
    type: Date,
    default: new Date(),
  },
})

// creating mongoose model from the created mongoose schema
const PostMessage = mongoose.model('PostMessage', postSchema)

// exporting mongoose model
export default PostMessage
