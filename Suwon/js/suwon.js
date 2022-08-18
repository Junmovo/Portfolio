$(".imgbox1").vegas({
  slides: [
    { src: "images/6.jpg" },
    { src: "images/3.jpg" },
    { src: "images/15.jpg" },
    { src: "images/8.jpg" },
  ],
  animation: "random",
  timer: false,
  delay: 7000,
});

const bgi = document.querySelector(".bgi");
const lis = document.querySelectorAll("#list li");

lis.forEach((elem, idx) => {
  elem.addEventListener("mouseover", () => {
    bgi.style.background = `url(images/${idx + 1}.jpg) no-repeat 50% / cover`;
    bgi.style.opacity = 1;
  });
});
lis.forEach((elem, idx) => {
  elem.addEventListener("mouseout", () => {
    bgi.style.background = `url(images/${idx + 1}.jpg) no-repeat 50% / cover`;
    bgi.style.opacity = 0;
  });
});

// $(".section_container").on('mousewheel',function(e){
//   var wheelDelta = e.originalEvent.wheelDelta;
//   if(wheelDelta > 0){
//     console.log("up");
//     $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
//   }else{console.log("down");
//   $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());		}});

// $(document).ready(function() {
//   $('html, body, *').mousewheel(function(e, delta) {
//   this.scrollLeft -= (delta*100);
//   e.preventDefault();
//   });
//   });

// $(window).scroll(function () {
//   if (scrollX > 700) {
//     $("#gnb").css("border-bottom", "1px solid black"),
//       $("#section2").css("border-right", "none");
//   } else $("#gnb").css("border", "none"), $("#section2").css("border-right", "1px solid black");
// });

const container = document.querySelector(".section_container");
const stickyBox = document.querySelector(".sticky_box");
const horizontal = document.querySelector("#viewbox");

addEventListener("scroll", () => {
  console.log("ho", horizontal.offsetTop); // 가장 가까운 포지션을 기준으로 위치값 계산. 0
  console.log("st", stickyBox.offsetTop); // sticky : scroll 기준. offset의 기준도 scroll. sticky 박스를 scroll 박스에 고정되는 지점부터 다시 offsetTop의 값이 결정
  let st = stickyBox.offsetTop;
  horizontal.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
  if (st > 200) {
    $("#welcome").css("transform", "translate(0px)");
  } else $("#welcome").css("transform", "translate(400px)");
  if (st > 300) {
    $("#visit").css("transform", "translate(200px)");
  } else $("#visit").css("transform", "translate(500px)");
  if (st > 400) {
    $("#suwon").css("transform", "translate(80px)");
  } else $("#suwon").css("transform", "translate(600px)");
  // if (st < 700) {
  //   // 스티키가 안먹음$("#gnb").css("border-bottom", "1px solid black"),
  //   $("#section2").css("position", "relative");
  // } else
  //   $("#section2").css("position", "fixed"),
  //     $("#gnb").css("left", "0"),
  //     $("#section2").css("border-right", "none");

  if (st < 900) {
    $(".imgbox3").css("transform", "translateY(960px)");
  } else $(".imgbox3").css("transform", "translateY(0px)");
  if (st < 1400) {
    $(".imgbox4").css("transform", "translateX(300px)"),
      $(".imgbox4").css("backgroundImage", "url(./images/19.png)");
  } else $(".imgbox4").css("transform", "translateX(0px)");
  if (st > 2300) {
    $(".imgbox4").css("backgroundImage", "url(./images/img6.jpg)");
  }
  if (st < 2200) {
    $("#section6 h1").css("opacity", "0"),
      $("#section6 h1").css("transform", "translateY(40px)");
  } else
    $("#section6 h1").css("opacity", "1"),
      $("#section6 h1").css("transform", "translateY(0px)");
  if (st < 2200) {
    $("#section6 h1").css("opacity", "0"),
      $("#section6 h1").css("transform", "translateY(40px)");
  } else
    $("#section6 h1").css("opacity", "1"),
      $("#section6 h1").css("transform", "translateY(0px)");

  if (st < 2400) {
    $("#section6 h2").css("opacity", "0"),
      $("#section6 h2").css("transform", "translateY(40px)");
  } else
    $("#section6 h2").css("opacity", "1"),
      $("#section6 h2").css("transform", "translateY(0px)");

  if (st < 2600) {
    $("#section6 h3").css("opacity", "0"),
      $("#section6 h3").css("transform", "translateY(40px)");
  } else
    $("#section6 h3").css("opacity", "1"),
      $("#section6 h3").css("transform", "translateY(0px)");

  if (st < 2800) {
    $("#section6 p").css("opacity", "0"),
      $("#section6 p").css("transform", "translateY(40px)");
  } else
    $("#section6 p").css("opacity", "1"),
      $("#section6 p").css("transform", "translateY(0px)");

  // if (st < 3400) {
  //   $("#section7").css("opacity", "0"), $("#section7").css("top", "-980px");
  // } else $("#section7").css("opacity", "1"), $("#section7").css("top", "0px");

  if (st > 4800) {
    $(".Expedition_IMG1").css("backgroundImage", "url(./images/24.jpg)");
  } else $(".Expedition_IMG1").css("backgroundImage", "url(./images/10.jpg)");

  if (st > 4900) {
    $(".Expedition_IMG2").css("bottom", "2vh"),
      $(".Expedition_IMG2").css("opacity", "1");
  } else
    $(".Expedition_IMG2").css("bottom", "-4vh"),
      $(".Expedition_IMG2").css("opacity", "0");

  if (st > 5200) {
    $("#section9 .dumitext h1").css("transform", "translateY(0px)"),
      $("#section9 .dumitext h1").css("opacity", "1");
  } else
    $("#section9 .dumitext h1").css("transform", "translateY(-40px)"),
      $("#section9 .dumitext h1").css("opacity", "0");

  if (st > 5400) {
    $(".Expedition_IMG2").css("backgroundImage", "url(./images/27.png)"),
      $("#section9 .dumitext h2").css("transform", "translateY(0px)"),
      $("#section9 .dumitext h2").css("opacity", "1");
  } else
    $(".Expedition_IMG2").css("backgroundImage", "url(./images/22.jpg)"),
      $("#section9 .dumitext h2").css("transform", "translateY(-40px)"),
      $("#section9 .dumitext h2").css("opacity", "0");

  if (st > 5600) {
    $("#section9 .dumitext p").css("transform", "translateY(0px)"),
      $("#section9 .dumitext p").css("opacity", "1");
  } else
    $("#section9 .dumitext p").css("transform", "translateY(-40px)"),
      $("#section9 .dumitext p").css("opacity", "0");

  if (st > 6400) {
    $(".Food_IMG1").css("transform", "translateY(0px)"),
      $(".Food_IMG1").css("opacity", "1");
  } else
    $(".Food_IMG1").css("transform", "translateY(40px)"),
      $(".Food_IMG1").css("opacity", "0");

  if (st > 6800) {
    $("#section11 .dumitext h1").css("transform", "translateY(0px)"),
      $("#section11 .dumitext h1").css("opacity", "1");
  } else
    $("#section11 .dumitext h1").css("transform", "translateY(40px)"),
      $("#section11 .dumitext h1").css("opacity", "0");

  if (st > 7000) {
    $(".Food_IMG2").css("transform", "translateX(0px)"),
      $(".Food_IMG2").css("opacity", "1");
  } else
    $(".Food_IMG2").css("transform", "translateX(400px)"),
      $(".Food_IMG2").css("opacity", "0");

  if (st > 7200) {
    $(".Food_IMG1").css("backgroundImage", "url(./images/28.jpg"),
      $("#section11 .dumitext h1").css("transform", "translateY(0px)"),
      $("#section11 .dumitext h1").css("opacity", "1");
  } else
    $(".Food_IMG1").css("backgroundImage", "url(./images/12.jpg"),
      $("#section11 .dumitext h1").css("transform", "translateY(40px)"),
      $("#section11 .dumitext h1").css("opacity", "0");

  if (st > 7400) {
    $("#section11 .dumitext h2").css("transform", "translateY(0px)"),
      $("#section11 .dumitext h2").css("opacity", "1");
  } else
    $("#section11 .dumitext h2").css("transform", "translateY(40px)"),
      $("#section11 .dumitext h2").css("opacity", "0");

  if (st > 7600) {
    $("#section11 .dumitext p").css("transform", "translateY(0px)"),
      $("#section11 .dumitext p").css("opacity", "1");
  } else
    $("#section11 .dumitext p").css("transform", "translateY(40px)"),
      $("#section11 .dumitext p").css("opacity", "0");

  if (st > 7800) {
    $(".Food_IMG2").css("backgroundImage", "url(./images/29.jpg");
  } else $(".Food_IMG2").css("backgroundImage", "url(./images/11.png");

  if (st > 8300) {
    $("#first").css("transform", "translateX(0px)");
  } else $("#first").css("transform", "translateX(400px)");

  if (st > 8600) {
    $("#second").css("transform", "translateX(0px)");
  } else $("#second").css("transform", "translateX(400px)");

  if (st > 9000) {
    $("#third").css("transform", "translateX(0px)");
  } else $("#third").css("transform", "translateX(400px)");

  if (st > 9500) {
    $("#four").css("transform", "translateX(0px)");
  } else $("#four").css("transform", "translateX(400px)");

  if (st > 10000) {
    $("#five").css("transform", "translateX(0px)");
  } else $("#five").css("transform", "translateX(400px)");

  if (st > 10500) {
    $("#six").css("transform", "translateX(0px)");
  } else $("#six").css("transform", "translateX(400px)");

  if (st > 10700) {
    $("#seven").css("transform", "translateX(0px)");
  } else $("#seven").css("transform", "translateX(400px)");

  if (st > 11100) {
    $("#eight").css("transform", "translateX(0px)");
  } else $("#eight").css("transform", "translateX(400px)");

  if (st > 11400) {
    $("#nine").css("transform", "translateX(0px)");
  } else $("#nine").css("transform", "translateX(400px)");

  if (st > 800) {
    $(".leftbg").css("left", "0px");
  } else $(".leftbg").css("left", "-120px");
});
