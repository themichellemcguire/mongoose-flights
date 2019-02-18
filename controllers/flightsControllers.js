var Flight = require('../models/flightModels');
const Destination = Flight.Destination;
Flight = Flight.Flight;
 
module.exports = {
    index,
    new: newForm,
    create,
    showFlights
}

function create(req, res) {
    for (var key in req.body){
        if (req.body[key] ===''){
            delete req.body[key];
        }
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flightsView/new');
        console.log(flight);
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flightsViews/new');
}
//     Flight.create(req.body);
//     console.log(req.body);
//   }

  function newForm(req,res) {
      res.render('flightsViews/new')
  };

function index(req, res) {
    Flight.find({}, (err, flights) => {
        res.render('flightsViews/indexViews', {
            flights,
            title: "Flights"
        })
    })
}

function showFlights(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flightsViews/show', {
            flight,
            title: "Flight Details"
        })
    })
}

