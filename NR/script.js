const header = document.querySelector("header");

window.addEventListener ("scroll", function(){

    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
}
 
var firstIndex=0;
function automaticSlide(){
    setTimeout(automaticSlide, 2000);
   var pics;
   const img=document.querySelectorAll('.opensea-img img');
   for(pics=0; pics<img.length;pics++){
        img[pics].style.display="none";
   }
   firstIndex++;
   if(firstIndex > img.length){
        firstIndex =1;
   }
   img[firstIndex - 1].style.display="block";
}
automaticSlide();