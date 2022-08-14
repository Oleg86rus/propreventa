const express = require('express');
const User = require('../models/User')
const router = express.Router({mergeParams: true});

router.get('/', async (req, res) => {
  try {
    const list = await User.find();
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

router.patch('/:userId', async (req, res) => {
  try {
    // if (req.body.userId === req.user._id) {
      const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body, {new: true})
      res.send(updatedUser)
    // } else {
    //   res.status(401).json({message: 'Unauthorized'})
    // }
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
});

module.exports = router;