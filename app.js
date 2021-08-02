// Referencia: https://stackoverflow.com/questions/24014075/html5-video-play-pause-video-on-screen-click

let ruleta = document.getElementById("ruleta");
ruleta.addEventListener("click", function (e) {
  e.preventDefault();
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});
