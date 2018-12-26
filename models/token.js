const Joi = require('joi');
const mongoose = require('mongoose');

const Token = mongoose.model('tokens', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
  },
  isDiviend: {
    type: Boolean,
    default: false
  },
  isIntrest: {
    type: Boolean,
    default: false
  },
  isStaked: {
    type: Boolean,
    default: false
  },
  isRewarded: {
    type: Boolean,
    default: false
  },
  isAirdrop: {
    type: Boolean,
    default: false
  },
  isUtil: {
    type: Boolean,
    default: false
  },
  // __v: {
  //   type: Number
  //   }
}));

function validateToken(token) {
  const schema = {    
    name: Joi.string().min(1),
    price: Joi.number(),
    isUtil: Joi.boolean(),
    isRewarded: Joi.boolean(),
    isAirdrop: Joi.boolean(),
    isStaked: Joi.boolean(),
    isIntrest: Joi.boolean(),
    isDiviend: Joi.boolean(),
    // __v: Joi.number()
  };

  return Joi.validate(token, schema);
}

exports.Token = Token; 
exports.validate = validateToken;