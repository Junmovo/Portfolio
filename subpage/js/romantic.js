AOS.init();

// const gnb = document.querySelectorAll('.btn')

addEventListener("scroll", () => {
  let ht = document.documentElement.scrollTop;
  if (ht > 800) {
    $(".btn").css({color: "black", transition: "0.5s"});
    $(".Gnbcontainer").css({backgroundColor: "none", transition: "0.5s"});
    $(".Gnbcontainer").addClass("on");
  } else {
    $(".btn").css({color: "white", transition: "0.5s"});
    // $('.Gnbcontainer').css({'backgroundColor':'inherit' , 'transition' : '0.5s' , 'box-shadow':'0px 8px 10px 2px rgba(0,0,0,0.5);'})
    $(".Gnbcontainer").removeClass("on");
  }
});

$(".btn")
  .eq(0)
  .on("click", e => {
    e.preventDefault();
    $('html, body').animate( { scrollTop : $('#first').offset().top - 200}, 500 );
    // window.scrollTo({
    //   top: $('#first').offset().top - 200,
    //   left: 0,
    //   behavior: "smooth",
    // });
  });
$(".btn")
  .eq(1)
  .on("click", e => {
    e.preventDefault();
    $('html, body').animate( { scrollTop : $('#second').offset().top - 200}, 500 );
    // window.scrollTo({
    //   top: 1400,
    //   left: 0,
    //   behavior: "smooth",
    // });
  });
$(".btn")
  .eq(2)
  .on("click", e => {
    e.preventDefault();
    $('html, body').animate( { scrollTop : $('#third').offset().top - 200}, 500 );
  });
$(".btn")
  .eq(3)
  .on("click", e => {
    e.preventDefault();
    $('html, body').animate( { scrollTop : $('#four').offset().top - 200}, 500 );
  });
$(".btn")
  .eq(4)
  .on("click", e => {
    e.preventDefault();
    $('html, body').animate( { scrollTop : $('#five').offset().top - 200}, 500 );
  });

$("body").on("mousewheel", function (e) {
  var wheel = e.originalEvent.wheelDelta;

  if (wheel > 0) {
    //스크롤 올릴때
    $(".Gnbcontainer ").css({height: "80px"});
    $(".Gnbcontainer .gnb ul").css({height: "80px"});
  } else {
    //스크롤  내릴때
    $(".Gnbcontainer").css({height: "40px"});
    $(".Gnbcontainer .gnb ul").css({height: "40px"});
  }
});
