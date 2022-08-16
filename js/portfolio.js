const toggleBtn = document.querySelector("#toggle_btn");
const hamberger = document.querySelector(".hamberger");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hamberger.classList.toggle("on");
});

const bgimg = document.querySelector(".imgpage");
const pfbox = document.querySelectorAll(".swiper-slide");
const swiperbg = document.querySelector("#my_style");
const word = document.querySelectorAll(".word");
const word2 = document.querySelectorAll(".word2");
pfbox.forEach((pfbox, idx) => {
  pfbox.addEventListener("mouseover", () => {
    bgimg.style.backgroundImage = `url(images/img${idx}.jpg`;
    bgimg.style.opacity = 1;
    swiperbg.style.backgroundColor = "rgba(0,0,0,.5)";
    pfbox.style.backgroundColor = "rgb(28, 62, 132, 0.5)";
    pfbox.classList.add("on");
  });
  pfbox.addEventListener("mouseout", () => {
    swiperbg.style.backgroundColor = "rgba(0,0,0,1)";
    pfbox.style.backgroundColor = "rgb(28, 62, 132, 0)";
    pfbox.classList.remove("on");
  });
});

const gnb = document.querySelector(".GNBcontainer");
let height = swiperbg.offsetTop - document.documentElement.clientHeight;
console.log(height);
console.log(document.documentElement.scrollTop);
addEventListener("scroll", () => {
  if (5000 > height) {
    gnb.classList.add("on");
  } else {
    gnb.classList.remove("on");
  }
});
// Swiper.js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 풀페이지.js
new fullpage("#fullpage", {
  //options here
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthpage", "lastPage"],
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  navigationPosition: "right",
  scrollingSpeed: 1000,
  afterLoad: function (origin, destination, direction, trigger) {
    var origin = this;

    if (origin.index == 3 && direction == "down") {
      document.querySelector(".GNBcontainer").style.display = `none`;
    } else if (origin.index == 4 && direction == "down") {
      document.querySelector(".GNBcontainer").style.display = `flex`;
    } else if (origin.index == 5 && direction == "up") {
      document.querySelector(".GNBcontainer").style.display = `none`;
    } else if (origin.index == 4 && direction == "up") {
      document.querySelector(".GNBcontainer").style.display = `flex`;
    }
  },
});

let n = 0; // 숫자 초기화
const timer = () => {
  $('.txt').removeClass('active');
  setTimeout(()=>{ // 2초 후에 한 번 실행
    $('.txt').eq(n).addClass('active')
    // (n<2) ? n++ : n = 0;
    if(n < 2){ 
      n++
    }else{
      n=0
    }

    // .eq(인덱스); 대상의 순서
    
  },2000)
}
timer();
setInterval(timer,4000);

$(".view.video").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='100%' height='100%' src='https://youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
}),
$(".video_modal_popup-closer").click(function() {
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").removeClass("reveal")
});

