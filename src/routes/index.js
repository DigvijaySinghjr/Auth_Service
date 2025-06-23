const express = require('express');

const v1ApiRoutess = require('./v1/index');

const router = express.Router();

router.use('/v1', v1ApiRoutess);


module.exports = router;