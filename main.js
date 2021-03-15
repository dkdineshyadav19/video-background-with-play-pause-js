const play = document.querySelector(".btn-play");
const pause = document.querySelector(".btn-pause");
const video = document.querySelector(".video-cont");

play.addEventListener("click",function(){
    video.play();
});

pause.addEventListener("click",function(){
    video.pause();
});


const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
    preloader.classList.add("hide-p");
});

