var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET show actors. */
router.get('/showActors', function(req, res, next) {
  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    var query = "SELECT first_name, last_name FROM actor";
    connection.query(query, function(err, rows, fields) {
    connection.release(); // release connection
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.json(rows); //send response
    });
  });
})

/* GET add actor. */
router.post('/addActor', function(req, res, next) {
  // Connect to the database
  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    var query = "INSERT INTO actor (first_name, last_name) VALUES (?, ?)";

    connection.query(query, [req.body.first, req.body.last], function(err, rows, fields) {
    connection.release(); // release connection
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(); //send response
    });
  });
})

module.exports = router;
