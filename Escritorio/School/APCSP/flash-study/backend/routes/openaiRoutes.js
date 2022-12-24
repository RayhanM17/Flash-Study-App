const express = require('express');
const { generateCards } = require('../controllers/openaiController')
const router = express.Router();

router.post('/v1/completions',generateCards)

module.exports = router;