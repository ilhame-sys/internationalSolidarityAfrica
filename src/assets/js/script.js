$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});


///

// function openModal(){
//   var elmt = document.getElementById("modal");

//   elmt.style.display = "block";
//   elmt.style.display = "contents";

//   var elmt = document.getElementById("modal-button");

//   elmt.style.display = "none";
//   }
// function closeModal(){
//   var elmt = document.getElementById("modal");
    
//   elmt.style.display = "none";
//   elmt.style.display = "none";
    
//   var elmt = document.getElementById("modal-button");
    
//   elmt.style.display = "block";
//   elmt.style.display = "contents";
//   }