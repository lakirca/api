const {Presale, validate} = require('../models/total_presale'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


/* GET */
router.get('/presale', async (req, res) => {
  const presale = await Presale.aggregate([{$group: {_id: "callthiswhateverdoesntmatter", total_presale: {$sum:"$trybe_presale_amount"}}}])
  res.send(presale);
});

router.get('/staked', async (req, res) => {
  const staked = await Presale.aggregate([{$group: {_id: "callthiswhateverdoesntmatter", total_staked: {$sum:"$staked_trybe_balance"}}}])
  res.send(staked);
});

router.get('/liquid', async (req, res) => {
  const liquid = await Presale.aggregate([{$group: {_id: "callthiswhateverdoesntmatter", total_liquid: {$sum:"$trybe_balance"}}}])
  res.send(liquid);
});

router.get('/offchain', async (req, res) => {
  const liquid = await Presale.aggregate([{$group: {_id: "callthiswhateverdoesntmatter", total_offchain: {$sum:"$offchain_balance"}}}])
  res.send(liquid);
});


module.exports = router; 
