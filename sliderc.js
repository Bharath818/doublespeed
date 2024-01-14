// Automatic slider
let currentSlide = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const translation = -currentSlide * 100 + '%';
  slider.style.transform = 'translateX(' + translation + ')';
}

// Automatically move to the next slide every 3 seconds
setInterval(() => showSlide(currentSlide + 1), 3000);
