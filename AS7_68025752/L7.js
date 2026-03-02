const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", function() {
    video.play();
});

pauseBtn.addEventListener("click", function() {
    video.pause();
});