const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/auth', require('./auth.routes'));
router.use('/doctors', require('./doctors.routes'));
router.use('/IVTherapy', require('./IVTherapy.routes'));
router.use('/checkups', require('./checkups.routes'));
router.use('/geneticResearch', require('./geneticResearch.routes'));
router.use('/user', require('./user.routes'));
router.use('/ultrasounds', require('./ultrasounds.routes'));
router.use('/services', require('./services.routes'));


module.exports = router;