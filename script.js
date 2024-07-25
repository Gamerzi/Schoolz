const phrases = [
    "Today is Saturday. Don't forget to wear your white uniform!",
    "Today is music class. Don't forget to bring your instrument",
    "Today is PT class please wear your sports shoes",
];

// Get the span element
const dynamicText = document.getElementById("dynamic-text");

// Initialize index for tracking the current phrase
let currentPhraseIndex = 0;

// Function to update the text with fade effect
function updateText() {
    dynamicText.classList.add('hidden');
    setTimeout(() => {
        dynamicText.textContent = phrases[currentPhraseIndex];
        dynamicText.classList.remove('hidden');
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }, 500); // Duration of the fade-out effect
}

// Set an interval to update the text every 3 seconds (adjust as needed)
setInterval(updateText, 3500);

updateText();
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.student-card');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000);
    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.student-card');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000);
    showSlide(currentIndex);
});