$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});


/// -- UTILSE AU 'Modal' DE ACTION -- ///
function openModal(){
    var elmt = document.getElementById("myModal");
    elmt.style.display = "block";
  }
function closeModal(){
    var elmt = document.getElementById("myModal");
    elmt.style.display = "none";
  }
  ///////////////////////////////////////