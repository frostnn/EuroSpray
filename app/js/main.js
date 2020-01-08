$(function(){

$('.banner-slider').slick({
arrows: false,
dots: true,
});

$('.product-slider').slick({
  speed: 600,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  });

  $('.btn-catalog').click(function() {
    $('.nav').toggleClass('open')
  });
  $('.btn-catalog').click(function() {
    $('.breadcrumb-item').toggleClass('open')
  });
/* $(window).scroll(function() {
  $('.footer-sup').css( "border-top", "1px solid red" );
}); */


});