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
    required: true
  },
  composition: {
    type: Array,
    required: true
  },
  result: {
    type: Array,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  info: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('Dropper', schema);