var express = require('express');
var router = express.Router();

var ctrlTravlr = require('../controllers/travlr');

router.get('/', ctrlTravlr.home);
router.get('/travel', ctrlTravlr.travel);
router.get('/login', ctrlTravlr.login);

module.exports = router;