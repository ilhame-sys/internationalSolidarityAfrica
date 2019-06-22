$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});


// /// -- UTILSE AU 'Modal' DE ACTION -- ///
// function openModal(){
//     var elmt = document.getElementById("myModal");
//     elmt.style.display = "block";
//     // $("html").css("overflow", "hidden");
//   }
// function closeModal(){
//     var elmt = document.getElementById("myModal");
//     elmt.style.display = "none";
//     // $("html").css("overflow", "auto");
//   }
//   function showText(){
//     var elmt = document.getElementById("modal-text");
//     elmt.style.display = "block";
//     var elmt = document.getElementById("modal-img");
//     elmt.style.display = "none";
//     var elmt = document.getElementById("modal-video");
//     elmt.style.display = "none";
//   }
// function showImg(){
//     var elmt = document.getElementById("modal-img");
//     elmt.style.display = "block";
//     var elmt = document.getElementById("modal-text");
//     elmt.style.display = "none";
//     var elmt = document.getElementById("modal-video");
//     elmt.style.display = "none";
//   }
//   function showVideo(){
//     var elmt = document.getElementById("modal-video");
//     elmt.style.display = "block";
//     var elmt = document.getElementById("modal-img");
//     elmt.style.display = "none";
//     var elmt = document.getElementById("modal-text");
//     elmt.style.display = "none";
//   }
//   ///////////////////////////////////////