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
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  navigationPosition: "right",
  scrollingSpeed: 1000,
});
