const express = require('express');
const Checkups = require('../models/Checkups');
const router = express.Router({mergeParams: true});

// /checkups
router.get('/', async (req, res) => {
  try {
    const list = await Checkups.find();
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})


module.exports = router;