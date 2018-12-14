const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('presaleentries', new mongoose.Schema({
  // _id: {
  //   type: String,
  //   required: true,
  // },
  owner: {
    type: String,
    required: true,
  },
  purchase_date: {
    type: String,
    required: true,
  },
  trybe_amount: {
    type: String,
    required: true,
  },
  eos_amount: {
    type: String,
    required: true,
  },
}));

// function validateUser(user) {
//   const schema = {
//     firstName: Joi.string().min(5).max(50).required(),
//     lastName: Joi.string().min(5).max(50).required(),
//     isAuthor: Joi.boolean()
//   };

//   return Joi.validate(user, schema);
// }

exports.User = User; 
// exports.validate = validateUser;