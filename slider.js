let currentIndex = 0;

const showSlide = () => {
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slider img').clientWidth;

    // If currentIndex is the last slide, set it to 0 to loop
    if (currentIndex === document.querySelectorAll('.slider img').length) {
        currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

const nextSlide = () => {
    currentIndex++;
    showSlide();
};

const prevSlide = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = document.querySelectorAll('.slider img').length - 1;
    }
    showSlide();
};

// Example: Automatically advance slides every 3 seconds
setInterval(nextSlide, 6000);

// Example: You can also add event listeners for navigation buttons or gestures
