const express = require('express');
const Dropper = require('../models/Droppers');
const router = express.Router({mergeParams: true});

// /droppers
router.get('/', async (req, res) => {
  try {
    const list = await Dropper.find();
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})


module.exports = router;