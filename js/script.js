const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const bgimg = document.querySelector(".list1")
const bgimg2 = document.querySelector(".list2")
const bgimg3 = document.querySelector(".list3")
bgimg.addEventListener('mouseover',()=>{
 img1.style.opacity=1;
 img1.style.transition="1.5s";
})
bgimg.addEventListener('mouseout',()=>{
 img1.style.opacity=0;
 img1.style.transition="0.5s";
})
bgimg2.addEventListener('mouseover',()=>{
 img2.style.opacity=1;
 img2.style.transition="1.5s";
})
bgimg2.addEventListener('mouseout',()=>{
 img2.style.opacity=0;
 img2.style.transition="0.5s";
})
bgimg3.addEventListener('mouseover',()=>{
 img3.style.opacity=1;
 img3.style.transition="1.5s";
})
bgimg3.addEventListener('mouseout',()=>{
 img3.style.opacity=0;
 img3.style.transition="0.5s";
})