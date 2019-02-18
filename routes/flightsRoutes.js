var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flightsControllers');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/show', flightsCtrl.showFlights);
router.get('/createNew', flightsCtrl.newForm);

module.exports = router;
