
  // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-gobbled").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");

    var newEatState = {
      gobbled: newEat
    };

    // Send the PUT request.
    $.ajax("/api/pizzas/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed gobbled to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPizza = {
      name: $("#pz").val().trim(),
      gobbled: $("[name=gobbled]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/pizzas", {
      type: "POST",
      data: newPizza
    }).then(
      function() {
        console.log("Made New Pizza");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-pizza").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/pizzas/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("Trashed Pizza", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
