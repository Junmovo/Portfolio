
  AOS.init();

// const gnb = document.querySelectorAll('.btn')


addEventListener('scroll',()=>{
  let ht = document.documentElement.scrollTop;
  if(ht>800){
    $('.btn').css({'color' : 'black','transition' : '0.5s'})
    $('.Gnbcontainer').css({'backgroundColor':'none' ,'transition' : '0.5s'})
    $('.Gnbcontainer').addClass('on')
    
  }else{
    $('.btn').css({'color' : 'white' , 'transition' : '0.5s'})
    // $('.Gnbcontainer').css({'backgroundColor':'inherit' , 'transition' : '0.5s' , 'box-shadow':'0px 8px 10px 2px rgba(0,0,0,0.5);'})
    $('.Gnbcontainer').removeClass('on')
  }
})

$('.btn').eq(0).on('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 900,
    left:0,
    behavior:'smooth'
  } )
})
$('.btn').eq(1).on('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 1400,
    left:0,
    behavior:'smooth'
  } )
})
$('.btn').eq(2).on('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 2900,
    left:0,
    behavior:'smooth'
  } )
})
$('.btn').eq(3).on('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 3700,
    left:0,
    behavior:'smooth'
  } )
})
$('.btn').eq(4).on('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 5000,
    left:0,
    behavior:'smooth'
  } )
})