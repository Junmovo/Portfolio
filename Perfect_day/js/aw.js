var mousePointer = $('#mouse-pointer');
var clickElems = $('a,button,input')
function moveCurser(e){
  mousePointer.css({
    'left': e.pageX,
    'top' : e.pageY
  })
}
clickElems.mouseenter(function(){
  console.log('마우스인')
  mousePointer.addClass('hover')
})
clickElems.mouseleave(function(){
  console.log('마우스나감')
  mousePointer.removeClass('hover')
})
$(window).on('mousemove', moveCurser)
