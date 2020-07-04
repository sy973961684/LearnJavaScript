const mongoose = require('mongoose')

const studentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10
  },
  age: {
    type: Number,
    min: 10,
    max: 25
  },
  sex: {
    type: String
  },
  email: String,
  hobbies: [String],
  collage: String,
  enterDate: {
    type: Date,
    default: () => new Date(+new Date() + 8 * 60 * 60 * 1000)
  }
})

const Student = mongoose.model('Student', studentsSchema)
module.exports = Student