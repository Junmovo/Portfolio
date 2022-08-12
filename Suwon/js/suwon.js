$(".imgbox1").vegas({
  slides: [
      { src: "images/6.jpg" },
      { src: "images/3.jpg" },
      { src: "images/15.jpg" },
      { src: "images/8.jpg" }
  ],
  animation: 'random',
  timer:false,
  delay: 7000
});

const bgi = document.querySelector('.bgi')
const lis = document.querySelectorAll('#list li')

lis.forEach((elem,idx)=>{
  elem.addEventListener("mouseover", () => {
    bgi.style.background = `url(images/${idx+1}.jpg) no-repeat 50% / cover`;
    bgi.style.opacity = 1;
  })
})
lis.forEach((elem,idx)=>{
  elem.addEventListener("mouseout", () => {
    bgi.style.background = `url(images/${idx+1}.jpg) no-repeat 50% / cover`;
    bgi.style.opacity = 0;
  })
})