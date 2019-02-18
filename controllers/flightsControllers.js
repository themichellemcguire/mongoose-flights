var Flights = require('../models/flightModels');

module.exports = {
    index,
    new: newFlight,
    create,
    showFlights,
    newForm
}

function create(req, res) {
    var flights = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights/new');
    });
  }
  function newFlight(req, res) {
    for (let key in req.body) {
         if (req.body[key] === '') delete req.body[key];
     }
    Flight.create(req.body);
    console.log(req.body);
  }

  function newForm(req,res) {
      res.render('/new')
  };

function index(req, res) {
    Flight.find({}, (err, flights) => {
        res.render('flights/index', {
            flights
        })
    })
}

function showFlights(req, res) {
    const allFlights = Flight.find({});
    console.log(allFlights);
}

function newFlight(req, res) {
    res.render('flights/new');
}