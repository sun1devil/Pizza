var express = require("express");

var router = express.Router();

// Import the model (pizza.js) to use its database functions.
var pizza = require("../models/pizza.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  pizza.all(function(data) {
    var hbsObject = {
      pizzas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/pizzas", function(req, res) {
  pizza.create(["name", "gobbled"], [req.body.name, req.body.gobbled], function(result) {
    // Send back the ID of the new pizza
    res.redirect("/");
  });
});

router.put("/api/pizzas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  pizza.update(
    {
      gobbled: req.body.gobbled
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

router.delete("/api/pizzas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  pizza.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;