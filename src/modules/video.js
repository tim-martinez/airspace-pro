function videoPlayOnView() {
  window.addEventListener('scroll', function () {
    const video = document.getElementById('study-video');
    const rect = video.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      video.play();
    } else {
      video.pause();
    }
  });
}

export { videoPlayOnView };
