const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/auth', require('./auth.routes'));
router.use('/doctors', require('./doctors.routes'));
router.use('/droppers', require('./droppers.routes'));
router.use('/checkups', require('./checkups.routes'));
router.use('/geneticResearch', require('./geneticResearch.routes'));
router.use('/user', require('./user.routes'));


module.exports = router;