const video = document.getElementById("video");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const fullscreen = document.getElementById("fullscreen");

// Play / Pause
playPause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPause.textContent = "⏸";
  } else {
    video.pause();
    playPause.textContent = "▶️";
  }
});

// Update progress bar
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
});

// Seek
progress.addEventListener("input", () => {
  const time = (progress.value / 100) * video.duration;
  video.currentTime = time;
});

// Volume
volume.addEventListener("input", () => {
  video.volume = volume.value;
});

// Fullscreen
fullscreen.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
});
