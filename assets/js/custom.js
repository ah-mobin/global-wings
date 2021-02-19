$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$('.carousel').carousel()

new WOW().init();

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('#showMoreButton1').click(function(){
  $('#hide1').removeClass('d-none');
  $('#showMoreButton2').removeClass('d-none');
  $('#showMoreButton1').addClass('d-none');
});

$('#showMoreButton2').click(function(){
  $('#hide2').removeClass('d-none');
  $('#showMoreButton3').removeClass('d-none');
  $('#showMoreButton2').addClass('d-none');
});

$('#showMoreButton3').click(function(){
  $('#hide3').removeClass('d-none');
  $('#showMoreButton4').removeClass('d-none');
  $('#showMoreButton3').addClass('d-none');
});

$('#showMoreButton4').click(function(){
  $('#hide4').removeClass('d-none');
  $('#showMoreButton5').removeClass('d-none');
  $('#showMoreButton4').addClass('d-none');
});

$('#showMoreButton5').click(function(){
  $('#hide5').removeClass('d-none');
  $('#showMoreButton6').removeClass('d-none');
  $('#showMoreButton5').addClass('d-none');
});

$('#showMoreButton6').click(function(){
  $('#hide6').removeClass('d-none');
  $('#showMoreButton6').addClass('d-none');
});