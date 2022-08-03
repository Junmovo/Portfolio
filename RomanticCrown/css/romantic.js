const topbtn = document.querySelector('#gotop')
const togglebtn = document.querySelector('#toggle_btn')
const hbg = document.querySelector('.hamberger')
const slideitem = document.querySelectorAll('.simpleslide .slide_item')
const prevBtn = document.querySelector('.slideBtn .prev')
const nextBtn = document.querySelector('.slideBtn .next')

let i = 0;
function autoSlide(){
  prevBtn.addEventListener('click',()=>{
    slideitem[i].classList.remove('active')
    i--;
    if(i<0){
      i= slideitem.length - 1
    }
    slideitem[i].classList.add('active')
  })
  nextBtn.addEventListener('click',()=>{
    slideitem[i].classList.remove('active')
    i++;
    if(i>=slideitem.length){
      i=0;
    }
    slideitem[i].classList.add('active')
  })
}
setInterval(function(){
  nextBtn.click()
},5000)
autoSlide()






//모바일 상단 GNB
togglebtn.addEventListener('click',(e)=>{
  e.preventDefault();
  hbg.classList.toggle('on')
})
topbtn.addEventListener('click',()=>{
// e.preventDefault();
scrollTo({top:0,behavior:"smooth"})
})
addEventListener('scroll',()=>{
let ht = document.documentElement.scrollTop;
if(ht>500){
topbtn.style.opacity=1;
}else{
topbtn.style.opacity=0;
}
})

//카카오 지도부분
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = {
      center: new kakao.maps.LatLng(37.553173, 126.921135), // 지도의 중심좌표
      level: 1, // 지도의 확대 레벨
      mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
  }; 

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.553173, 126.921135), // 마커의 좌표
  map: map // 마커를 표시할 지도 객체
});
    // 커스텀 오버레이를 생성하고 지도에 표시한다
var customOverlay = new kakao.maps.CustomOverlay({
  map: map,
  content: '<div style="padding:0 5px;background:#000;color:#fff">A-Land 홍대점</div>', 
  position: new kakao.maps.LatLng(37.553173, 126.921135), // 커스텀 오버레이를 표시할 좌표
  xAnchor: 0.5, // 컨텐츠의 x 위치
  yAnchor: 3 // 컨텐츠의 y 위치
});