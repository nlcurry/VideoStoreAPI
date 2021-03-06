var Customer = require("../models/customer")
var Rental = require('../models/rental')

var CustomersController = {
  index: function(req, res, next) {
    Customer.all(function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customer list:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(customers)
      }
    });
  },

  sortBy: function(req, res, next) {
    var type = req.params.query
    var n = req.query.n
    var p = req.query.p
    var firstrow = n*(p-1)+1
    var lastrow = n*p
    Customer.sortBy([type,firstrow,lastrow],function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customer list:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(customers)
      }
    });
  },

  current: function(req, res, next) {
    var id = req.params.id
    Rental.currentCheckedOut([id,'checked_out'], function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customer list:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(customers)
      }
    });
  },

  history: function (req, res, next) {
    var id = req.params.id
    Rental.all([id], function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customer list:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(customers)
      }
    });
  }
}

module.exports = CustomersController
