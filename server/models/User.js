const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String},
  sex: {type: String, enum: ['male', 'female', 'other']},
  favourites: {type: Array},
  admin: {type: Boolean}
}, {
  timestamps: true
});

module.exports = model('User', schema);