$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2,
        margin:40,
        loop:true,
        nav:true,
        navText:['<i class="fas fa-long-arrow-alt-left">','</i><i class="fas fa-long-arrow-alt-right"></i>']
     
    });
  });
  var topBtn=document.getElementById("topBtn")

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>200)
    topBtn.style="display:block"
    else{
        topBtn.style="display:none"
    }


}) 
if(document.documentElement.scrollTop==0)
    topBtn.style="display:none"