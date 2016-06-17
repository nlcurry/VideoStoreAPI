var Rental = require("../models/rental")
var Movie = require("../models/movie")

var RentalsController = {

  lookupMovie: function (req, res, next) {
    var title = req.params.movie

    Movie.rentalInfo([title], function(error, rentals) {
      if(error) {
        var err = new Error("Error retrieving movie info:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(rentals)
      }
    })}

  // function sortBy () {

  // },

  // function checkOut () {

  // },

  // function return () {

  // },

  // function overdue () {

  // }
}

module.exports = RentalsController
