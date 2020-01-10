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
  $('.new-slider').slick({
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
$('.btn-product__porular').click(function() {
  $('.product-slider').toggle();
  $('.new-slider').hide();
  $('.btn-product__porular').toggleClass('color');
  $('.btn-product__new.color').toggleClass( 'color');
 
});

$('.btn-product__new').click(function() {
  $('.new-slider').toggle();
  $('.product-slider').hide();
  $('.btn-product__new').toggleClass('color');
  $('.btn-product__porular.color').toggleClass( 'color');
});
});