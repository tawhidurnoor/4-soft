$(window).on('load', function () {
  $('#line').delay(1000).fadeOut(1000);
  $('#preloader').delay(1000).fadeOut(1000);
});

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
// ===========
VanillaTilt.init(document.querySelectorAll('.home_services_body'), {
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 1,
});

// ===========
VanillaTilt.init(document.querySelectorAll('.team'), {
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 1,
});
// ===========
VanillaTilt.init(document.querySelectorAll('.product_body'), {
  max: 25,
  speed: 400,
});
// =====================
var containerEl = document.querySelector('.product_main');

var mixer = mixitup(containerEl);
$('.filtering').on('click', '.control', function () {
  $(this).addClass('control-active').siblings().removeClass('control-active');
});
