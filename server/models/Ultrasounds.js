const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
  }
}, {
  timestamps: true
});

module.exports = model('Ultrasounds', schema);