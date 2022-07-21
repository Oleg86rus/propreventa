const express = require('express');
const Doctor = require('../models/Doctors');
const router = express.Router({mergeParams: true});

// /doctors
router.get('/', async (req, res) => {
  try {
    const list = await Doctor.find();
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})


module.exports = router;