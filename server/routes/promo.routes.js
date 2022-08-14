const express = require('express');
const Promo = require('../models/Promo')
const router = express.Router({mergeParams: true});

router.get('/', async (req, res) => {
  try {
    const list = await Promo.find();
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})


module.exports = router;