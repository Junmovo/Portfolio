var swiper = new Swiper(".mySwiper", {
  
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
AOS.init();

$('.selectbox ul li a').eq(0).on('click',function(e){
  e.preventDefault();
  $('.selectbox ul li a').removeClass('active')
  $('.selectbox ul li a').eq(0).addClass('active')
  $('.bestbox').addClass('on')
  $('.seoul').removeClass('on')
  $('.gyong').removeClass('on')
  $('.country_all').removeClass('on')
 })
$('.selectbox ul li a').eq(1).on('click',function(e){
  e.preventDefault();
  $('.selectbox ul li a').removeClass('active')
  $('.selectbox ul li a').eq(1).addClass('active')
  $('.bestbox').removeClass('on')
  $('.seoul').addClass('on')
  $('.gyong').removeClass('on')
  $('.country_all').removeClass('on')
 })
$('.selectbox ul li a').eq(2).on('click',function(e){
  e.preventDefault();
  $('.selectbox ul li a').removeClass('active')
  $('.selectbox ul li a').eq(2).addClass('active')
  $('.bestbox').removeClass('on')
  $('.seoul').removeClass('on')
  $('.gyong').addClass('on')
  $('.country_all').removeClass('on')
 })
$('.selectbox ul li a').eq(3).on('click',function(e){
  e.preventDefault();
  $('.selectbox ul li a').removeClass('active')
  $('.selectbox ul li a').eq(3).addClass('active')
  $('.bestbox').removeClass('on')
  $('.seoul').removeClass('on')
  $('.gyong').removeClass('on')
  $('.country_all').addClass('on')
 })



