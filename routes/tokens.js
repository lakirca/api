const {Token, validate} = require('../models/token');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


/* GET */
router.get('/', async (req, res) => {
  const tokens = await Token.find();
  try {
    res.json(tokens)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

// Utility
router.get('/util', async (req, res) => {
  const tokens = await Token.find({ isUtil: true });
  try {
    res.json(tokens)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

// Intrest
router.get('/intrest', async (req, res) => {
  const tokens = await Token.find({ isIntrest: true });
  try {
    res.json(tokens)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

// Reward
router.get('/reward', async (req, res) => {
  const tokens = await Token.find({isRewarded: true});
  try {
    res.json(tokens)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

// Dividend
router.get('/dividend', async (req, res) => {
  const tokens = await Token.find({isDiviend: true});
  try {
    res.json(tokens)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

// Staked
router.get('/staked', async (req, res) => {
  const tokens = await Token.find({isStaked: true});
  try {
    res.json(tokens)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

// Airdrop
router.get('/airdrop', async (req, res) => {
  const tokens = await Token.find({isAirdrop: true});
  try {
    res.json(tokens)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

/* POST */
router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).json(error.details[0].message);
  
  let token = new Token({ 
    name: req.body.name,
    price: req.body.price,
    isDiviend: req.body.isDiviend,
    isIntrest: req.body.isIntrest,
    isStaked: req.body.isStaked,
    isRewarded: req.body.isRewarded,
    isAirdrop: req.body.isAirdrop,
    isTask: req.body.isTask,
    isUtil: req.body.isUtil,
  });
  const tokens = await Token.find();
  
  try {
    token = await token.save();
    res.json(token)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});


/* PUT */
router.put('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).json(error.details[0].message);
  
  const token = await Token.findOneAndUpdate({name: req.body.name}, { 
    name: req.body.name,
    price: req.body.price,
    isDiviend: req.body.isDiviend,
    isIntrest: req.body.isIntrest,
    isStaked: req.body.isStaked,
    isRewarded: req.body.isRewarded,
    isAirdrop: req.body.isAirdrop,
    isUtil: req.body.isUtil,
  }, {
    new: true
  });

  if (!token) return res.status(404).json('The token with the given ID was not found.');
  
  try {
    res.json(token)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

/* DELETE by ID */
router.delete('/:id', async (req, res) => {
  const token = await Token.findByIdAndRemove(req.params.id);

  if (!token) return res.status(404).json('The token with the given ID was not found.');

  try {
    res.json(token)
  } catch (error) {
    console.error(error);
    res.json(error)
  };
});


/* GET by ID */
router.get('/:id', async (req, res) => {
  const token = await Token.findById(req.params.id);

  if (!token) return res.status(404).json('The token with the given ID was not found.');

  try {
    res.json(token)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
});

module.exports = router;