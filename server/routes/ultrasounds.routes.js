const express = require('express');
const Ultrasound = require('../models/Ultrasounds');
const router = express.Router({mergeParams: true});

// /ultrasound
router.get('/', async (req, res) => {
  try {
    const list = await Ultrasound.find();
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})


module.exports = router;