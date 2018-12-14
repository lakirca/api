const Joi = require('joi');
const mongoose = require('mongoose');

const Token = mongoose.model('tokens', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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
  isTask: {
    type: Boolean,
    default: false
  },
  isUtil: {
    type: Boolean,
    default: false
  },
}));

function validateToken(token) {
  const schema = {
    name: Joi.string().min(2).required(),
    status: Joi.boolean()
  };

  return Joi.validate(token, schema);
}

exports.Token = Token; 
exports.validate = validateToken;