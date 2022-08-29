$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        stagePadding: 90,
        margin: 32,
        loop: true,
      },
      // breakpoint from 480 up
      601: {
        items: 2,
      },
      // breakpoint from 768 up
      1001: {
        items: 3,
        margin: 48,
      },
    },
  });
});

/*Video btn*/
const videoBtn = document.querySelector("#video-btn");
const videoPic = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

videoBtn.addEventListener("click", function () {
  videoPic.classList.add("none");
  videoWrapper.classList.remove("video-overlay");
  videoBtn.classList.add("none");

  if (video.paused) {
    video.play();
  }
});

video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    videoPic.classList.remove("none");
    videoBtn.classList.remove("none");
    videoWrapper.classList.add("video-overlay");
    video.pause();
  }
});
