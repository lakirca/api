const {User, validate} = require('../models/user'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


/* GET */
router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});


module.exports = router; 