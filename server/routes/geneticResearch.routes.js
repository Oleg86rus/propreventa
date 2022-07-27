const express = require('express');
const GeneticResearch = require('../models/GeneticResearch');
const router = express.Router({mergeParams: true});

// /geneticResearch
router.get('/', async (req, res) => {
  try {
    const list = await GeneticResearch.find();
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})


module.exports = router;