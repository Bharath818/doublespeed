const container = document.getElementById('scrollContainer');
const navDotsContainer = document.getElementById('navDots');
const cards = document.querySelectorAll('.container .slider img');
const dots = [];

cards.forEach((img, index) => {
  const dot = document.createElement('div');
  dot.classList.add('nav-dot');
  dot.addEventListener('click', () => {
    scrollToCard(index);
  });
  navDotsContainer.appendChild(dot);
  dots.push(dot);
});

function updateNavDots() {
  const currentCardIndex = Math.round(container.scrollLeft / container.clientWidth);
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentCardIndex);
  });
}

function scrollToCard(index) {
  container.scrollTo({
    left: index * container.clientWidth,
    behavior: 'smooth',
  });
  updateNavDots();
}

container.addEventListener('scroll', updateNavDots);
updateNavDots();