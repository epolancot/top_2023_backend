const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards');

// All paths start with '/api/cards'

// GET  /api/cards
router.get('/', cardsCtrl.index)

module.exports = router;