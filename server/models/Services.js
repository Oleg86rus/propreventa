const {Schema, model} = require('mongoose');

const schema = new Schema({
  checkups: [{type: Schema.Types.ObjectId, ref: 'CheckUp'}],
  doctors: [{type: Schema.Types.ObjectId, ref: 'Doctor'}],
}, {
  timestamps: true
});

module.exports = model('Services', schema);