const {Schema, model} = require('mongoose');

const schema = new Schema({
  imageSrc: {type: String},
  imageAlt: {type: String},
}, {
  timestamps: true
});

module.exports = model('Promo', schema);