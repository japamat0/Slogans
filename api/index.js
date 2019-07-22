const express = require('express');
const slogans = require('./endpoints/slogans');

const router = express.Router();

router.use('/slogans', slogans);

module.exports = router;
