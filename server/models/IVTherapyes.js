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
  imageSrc: {
    type: String,
  },
  imageAlt: {
    type: String,
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
    type: String
  }
}, {
  timestamps: true
});

module.exports = model('IVTherapy', schema);