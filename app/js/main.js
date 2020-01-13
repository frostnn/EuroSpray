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
  $('.product-slider').show();
  $('.new-slider').hide();
  $('.btn-product__porular').toggleClass('color');
  $('.btn-product__new.color').toggleClass( 'color');
 
});

$('.btn-product__new').click(function() {
  $('.product-slider').hide();
  $('.new-slider').show();
  $('.btn-product__new').toggleClass('color');
  $('.btn-product__porular').toggleClass( 'color');
});



$('.btn-item__characteristic').click(function() {
  $('.item-characteristic').show();
  $('.item-application').hide();
  $('.btn-item__characteristic').toggleClass('color');
  $('.btn-item__application.color').toggleClass( 'color');
  
});

$('.btn-item__application').click(function() {
  $('.item-characteristic').hide();
  $('.item-application').show();
  $('.btn-item__characteristic').toggleClass('color');
  $('.btn-item__application').toggleClass( 'color');
});



$('.popup-with-form').magnificPopup({
  type: 'inline',
  focus: '#name',
});


});

$(document).ready(function(){
$(window).scroll(function(){
  $('.about-advantage__img').addClass('scroll');
  $('.about-advantage').addClass('scroll');
});
});

