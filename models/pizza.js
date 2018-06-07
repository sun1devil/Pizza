// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pizza = {
  all: function(cb) {
    orm.all("pizzas", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("pizzas", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("pizzas", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (pizza_controller.js).
module.exports = pizza;


// // Buttons*****************
// {/* <button id="add-pizza" type="submit">Add Pizza</button>
//   <button id="eat-pizza" type="submit">Add Pizza</button>
//   <button id="gross-pizza" type="submit">Add Pizza</button>
//   <button id="change-pizza" type="submit">Add Pizza</button> */}

  // $("#add-pizza").on("click", function(event) {
  //   event.preventDefault();
  
  //   // make a newPizza
  //   var newPizza = {
  //     // name from name input
  //     name: $("#name").val().trim(),
      
  //       };
  
  //   // send an AJAX POST-request with jQuery
  //   $.post("/api/new", newPizza)
  //     // on success, run this callback
  //     .then(function(data) {
  //       // log the data we found
  //       console.log(data);
  //       // tell the user we're adding a pizza an alert window
  //       alert("Adding pizza...");
  //     });
  
  //   // empty each input box by replacing the value with an empty string
  //   $("#name").val("");
      
  // });