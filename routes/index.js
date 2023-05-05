const express = require('express');
const router = express.Router();

// Config .env
require('dotenv').config();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
