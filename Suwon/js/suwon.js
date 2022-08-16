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
AOS.init({
  duration: 1000
});

// $(".section_container").on('mousewheel',function(e){		
//   var wheelDelta = e.originalEvent.wheelDelta;		
//   if(wheelDelta > 0){			
//     console.log("up");			
//     $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
//   }else{console.log("down");			
//   $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());		}});
$(document).ready(function() {
  $('html, body, *').mousewheel(function(e, delta) {
  this.scrollLeft -= (delta*100);
  e.preventDefault();
  });
  });

  
  $(window).scroll(function(){
    if(scrollX<200 && scrollX==0){
      $('#welcome').css('transform','translate(400px)')
    }else(
      $('#welcome').css('transform','translate(-100px)')
    )
  })
  $(window).scroll(function(){
    if(scrollX<200){
      $('#visit').css('transform','translate(500px)')
    }else(
      $('#visit').css('transform','translate(0px)')
    )
  })
  $(window).scroll(function(){
    if(scrollX<200){
      $('#suwon').css('transform','translate(600px)')
    }else(
      $('#suwon').css('transform','translate(80px)')
    )
  })
 console.log(scrollX)
 $(window).scroll(function(){
  if(scrollX<700){
    $('#gnb').css('border-bottom','1px solid black'),
    $('#section2').css('border-right','none')
  }else(
    $('#gnb').css('border','none'),
    $('#section2').css('border-right','1px solid black')
  )
})

$(window).scroll(function(){
  if(scrollX<800){
    $('.imgbox3').css('transform','translateY(960px)')
  }else(
    $('.imgbox3').css('transform','translateY(0px)')
  )
})
$(window).scroll(function(){
  if(scrollX<1400){
    $('.imgbox4').css('transform','translateX(300px)'),
    $('.imgbox4').css('backgroundImage','url(./images/19.png)')
  }else(
    $('.imgbox4').css('transform','translateX(0px)')
  )
})
$(window).scroll(function(){
  if(scrollX>2300){
    $('.imgbox4').css('backgroundImage','url(./images/img6.jpg)')
  }
})
$(window).scroll(function(){
  if(scrollX<2200){
    $('#section6 h1').css('opacity','0'),
    $('#section6 h1').css('transform','translateY(40px)')
  }else($('#section6 h1').css('opacity','1'),
  $('#section6 h1').css('transform','translateY(0px)'))
})

$(window).scroll(function(){
  if(scrollX<2400){
    $('#section6 h2').css('opacity','0'),
    $('#section6 h2').css('transform','translateY(40px)')
  }else($('#section6 h2').css('opacity','1'),
  $('#section6 h2').css('transform','translateY(0px)'))
})
$(window).scroll(function(){
  if(scrollX<2600){
    $('#section6 h3').css('opacity','0'),
    $('#section6 h3').css('transform','translateY(40px)')
  }else($('#section6 h3').css('opacity','1'),
  $('#section6 h3').css('transform','translateY(0px)'))
})
$(window).scroll(function(){
  if(scrollX<2800){
    $('#section6 p').css('opacity','0'),
    $('#section6 p').css('transform','translateY(40px)')
  }else($('#section6 p').css('opacity','1'),
  $('#section6 p').css('transform','translateY(0px)'))
})
$(window).scroll(function(){
  if(scrollX<3400){
    $('#section7').css('opacity','0'),
    $('#section7').css('top','-980px')
  }else($('#section7').css('opacity','1'),
  $('#section7').css('top','0px'))
})
$(window).scroll(function(){
  if(scrollX>4800){
    $('.Expedition_IMG1').css('backgroundImage','url(./images/24.jpg)')
  }else(
    $('.Expedition_IMG1').css('backgroundImage','url(./images/10.jpg)')
  )
})
$(window).scroll(function(){
  if(scrollX>4900){
    $('.Expedition_IMG2').css('bottom','2vh'),
    $('.Expedition_IMG2').css('opacity','1')
  }else(
    $('.Expedition_IMG2').css('bottom','-4vh'),
    $('.Expedition_IMG2').css('opacity','0')
  )
})

$(window).scroll(function(){
  if(scrollX>5200){
    $('#section9 .dumitext h1').css('transform','translateY(0px)'),
    $('#section9 .dumitext h1').css('opacity','1')
  }else(
    $('#section9 .dumitext h1').css('transform','translateY(-40px)'),
    $('#section9 .dumitext h1').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>5400){
    $('.Expedition_IMG2').css('backgroundImage','url(./images/27.png)'),
    $('#section9 .dumitext h2').css('transform','translateY(0px)'),
    $('#section9 .dumitext h2').css('opacity','1')
  }else(
    $('.Expedition_IMG2').css('backgroundImage','url(./images/22.jpg)'),
    $('#section9 .dumitext h2').css('transform','translateY(-40px)'),
    $('#section9 .dumitext h2').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>5600){
    $('#section9 .dumitext p').css('transform','translateY(0px)'),
    $('#section9 .dumitext p').css('opacity','1')
  }else(
    $('#section9 .dumitext p').css('transform','translateY(-40px)'),
    $('#section9 .dumitext p').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>6400){
    $('.Food_IMG1').css('transform','translateY(0px)'),
    $('.Food_IMG1').css('opacity','1')
  }else(
    $('.Food_IMG1').css('transform','translateY(40px)'),
    $('.Food_IMG1').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>6800){
    $('#section11 .dumitext h1').css('transform','translateY(0px)'),
    $('#section11 .dumitext h1').css('opacity','1')
  }else(
    $('#section11 .dumitext h1').css('transform','translateY(40px)'),
    $('#section11 .dumitext h1').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>7000){
    $('.Food_IMG2').css('transform','translateX(0px)'),
    $('.Food_IMG2').css('opacity','1')
  }else(
    $('.Food_IMG2').css('transform','translateX(400px)'),
    $('.Food_IMG2').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>7200){
    $('.Food_IMG1').css('backgroundImage','url(./images/28.jpg'),
    $('#section11 .dumitext h1').css('transform','translateY(0px)'),
    $('#section11 .dumitext h1').css('opacity','1')
  }else(
    $('.Food_IMG1').css('backgroundImage','url(./images/12.jpg'),
    $('#section11 .dumitext h1').css('transform','translateY(40px)'),
    $('#section11 .dumitext h1').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>7400){
    $('#section11 .dumitext h2').css('transform','translateY(0px)'),
    $('#section11 .dumitext h2').css('opacity','1')
  }else(
    $('#section11 .dumitext h2').css('transform','translateY(40px)'),
    $('#section11 .dumitext h2').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>7600){
    $('#section11 .dumitext p').css('transform','translateY(0px)'),
    $('#section11 .dumitext p').css('opacity','1')
  }else(
    $('#section11 .dumitext p').css('transform','translateY(40px)'),
    $('#section11 .dumitext p').css('opacity','0')
  )
})
$(window).scroll(function(){
  if(scrollX>7800){
    $('.Food_IMG2').css('backgroundImage','url(./images/29.jpg')

  }else(
    $('.Food_IMG2').css('backgroundImage','url(./images/11.png')
    
  )
})
$(window).scroll(function(){
  if(scrollX>8300){
    $('#first').css('transform','translateX(0px)')

  }else(
    $('#first').css('transform','translateX(400px)')
  )
})
$(window).scroll(function(){
  if(scrollX>8600){
    $('#second').css('transform','translateX(0px)')

  }else(
    $('#second').css('transform','translateX(400px)')
  )
})
$(window).scroll(function(){
  if(scrollX>8900){
    $('#third').css('transform','translateX(0px)')

  }else(
    $('#third').css('transform','translateX(400px)')
  )
})
$(window).scroll(function(){
  if(scrollX>9200){
    $('#four').css('transform','translateX(0px)')

  }else(
    $('#four').css('transform','translateX(400px)')
  )
})
$(window).scroll(function(){
  if(scrollX>9500){
    $('#five').css('transform','translateX(0px)')

  }else(
    $('#five').css('transform','translateX(400px)')
  )
})
$(window).scroll(function(){
  if(scrollX>9800){
    $('#six').css('transform','translateX(0px)')

  }else(
    $('#six').css('transform','translateX(400px)')
  )
})
$(window).scroll(function(){
  if(scrollX>10200){
    $('#seven').css('transform','translateX(0px)')

  }else(
    $('#seven').css('transform','translateX(400px)')
  )
})
$(window).scroll(function(){
  if(scrollX>10500){
    $('#eight').css('transform','translateX(0px)')

  }else(
    $('#eight').css('transform','translateX(400px)')
  )
})
$(window).scroll(function(){
  if(scrollX>10800){
    $('#nine').css('transform','translateX(0px)')

  }else(
    $('#nine').css('transform','translateX(400px)')
  )
})

var offset = $("#section5").offset(); //해당 위치 반환
$('#HS').on('click',(e)=>{
  e.preventDefault();
  $("html, body").animate({scrollLeft: offset.left},400);
})

