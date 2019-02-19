var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flightsControllers');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.showFlights);
router.post('/', flightsCtrl.create);
router.delete('/:id', flightsCtrl.delete);

module.exports = router;
