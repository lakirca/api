const Joi = require('joi');
const mongoose = require('mongoose');

const Presale = mongoose.model('balances', new mongoose.Schema({
  // _id: {
  //   type: String,
  //   required: true,
  // },
  group: {
    type: String,
  },
  total_presale: {
    type: String,
  },
  total_staked: {
    type: String,
  },
  total_liquid: {
    type: String,
  },
  total_offchain: {
    type: String,
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

exports.Presale = Presale; 
// exports.validate = validateUser;