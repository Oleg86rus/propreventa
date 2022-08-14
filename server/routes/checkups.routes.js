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

router.post('/', async (req, res) => {
  try {
    const list = await Checkups.create({
      ...req.body,
      composition: [
        '1',
        '2',
        '3'
      ]
    });
    res.status(201).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

router.delete("/:checkupId", async (req, res) => {
  try {
    const { checkupId } = req.params;
    const removedCheckup = await Checkups.findById(checkupId);
    await removedCheckup.remove();
    res.send(null);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});


module.exports = router;