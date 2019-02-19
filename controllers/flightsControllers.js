var Flight = require('../models/flightModels');
 
module.exports = {
    index,
    new: newForm,
    create,
    showFlights,
    delete: deleteFlight
}

//this is my home page  
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

// function create(req, res) {
//     console.log(req.body)
//     for (var key in req.body){
//         if (req.body[key] ===''){
//             delete req.body[key];
//         }
//     }
//     var flight = new Flight(req.body);
//     flight.save(function(err) {
//         if (err) return res.render('flightsViews/new');
//         console.log(flight);
//         res.redirect('/flights');
//     });
// }
function create(req, res) {
    console.log(req.body)
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flightsViews/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

// function newFlight(req, res) {
//     res.render('flightsViews/new');
// }
//     Flight.create(req.body);
//     console.log(req.body);
//   }

  function newForm(req,res) {
      res.render('flightsViews/new')
  };




function deleteFlight (req, res) {
    Flight.findByIdAndRemove(req.params.id, function(error, deletedFlight){
        console.log(deletedFlight, 'This Flight was deleted')
        res.redirect('/flights')
    
})
}
