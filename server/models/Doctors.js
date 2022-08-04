const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
  },
  imageSrc: {
    type: String,
  },
  imageAlt: {
    type: String,
  }
}, {
  timestamps: true
});

module.exports = model('Doctor', schema);