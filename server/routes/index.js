const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/doctors', require('./doctors.routes'));


module.exports = router;