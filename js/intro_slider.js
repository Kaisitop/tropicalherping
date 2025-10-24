let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const track = document.querySelector('.gallery_slider_track');
let autoSlideInterval = setInterval(autoSlide, 3200);

function goToSlide(index) {
  // Clamp the index between 0 and last slide
  if (index < 0) index = 0;
  if (index >= totalSlides) {
    index = totalSlides - 1;
    stopAutoSlide(); // Stop auto on last slide
  }

  currentSlide = index;
  track.style.transition = 'transform 0.6s ease-in-out';
  track.style.transform = `translateX(-${100 * currentSlide}%)`;
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
}

function autoSlide() {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  } else {
    stopAutoSlide();
  }
}

// Manual navigation disables auto-slide
document.querySelectorAll('.next_white').forEach(btn =>
  btn.addEventListener('click', () => {
    stopAutoSlide();
    goToSlide(currentSlide + 1);
  })
);

document.querySelectorAll('.prev_white').forEach(btn =>
  btn.addEventListener('click', () => {
    stopAutoSlide();
    goToSlide(currentSlide - 1);
  })
);
