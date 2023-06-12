var audio = new Audio('Anne-Marie-01-Then.mp3');
var playButton = document.getElementById('playButton');
playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
