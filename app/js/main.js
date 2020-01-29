$(function(){

$('.banner-slider').slick({
arrows: false,
dots: true,
});

  $('.new-slider').slick({
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    });

  $('.btn-catalog').click(function() {
    $('.nav').toggleClass('open')
  });

  $('.btn-catalog').click(function() {
    $('.breadcrumb-item').toggleClass('open')
  });

  /* open mob-menu */
  $('.btn-catalog__mob').click(function() {
    $('.mob-menu').addClass('open')
  });
  $('.btn_close').click(function() {
    $('.mob-menu').removeClass('open')
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


/* Toggle catalog items */


$('.block__title.autochem').click(function() {
  $('.autochemistry-block.autochem').toggleClass('close');
});

$('.block__title.color').click(function() {
  $('.paintwork-block.color').toggleClass('close');
});

$('.block__title.lacquer').click(function() {
  $('.paintwork-block.lacquer').toggleClass('close');
});

$('.block__title.spriming').click(function() {
  $('.paintwork-block.spriming').toggleClass('close');
});

$('.block__title.equipments').click(function() {
  $('.equipments-block.equipments').toggleClass('close');
});

$('.block__title.semi').click(function() {
  $('.semi-block.semi').toggleClass('close');
});


/* ---------------------- */




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

$(document).ready(function(){
  $(window).scroll(function(){
    $('.block__title').addClass('on');
    $('.scroll-effect').addClass('on');
  });
  });

  $(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Ваше письмо отправлено!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  
  });

  $(function(){
    $('.product-slider').slick({
      dots: true,
      infinite: false,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
      
       
      ]
    });
    
  });
  
  
  let autocosmeticsToggleCatalog = document.querySelector('.block__title.autocosm');
  let autocosmeticsCatalog = document.querySelector('.autocosmetics-block.autocosm');
 

  autocosmeticsToggleCatalog.addEventListener('click', function(){
    autocosmeticsCatalog.classList.toggle('close');
   
  });






 