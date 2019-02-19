var Flight = require('../models/flightModels');

module.exports = {
  create
};

function create(req, res) {
  console.log(req.params.id)
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}