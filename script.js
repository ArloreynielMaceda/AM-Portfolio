// script.js
document.addEventListener("DOMContentLoaded", function() {
    const changingText = document.querySelector(".changing-text");
    const texts = ["CODE", "SHIFT"];
    let index = 0;

    // Function to type text with a typing effect
    function typeText(text, callback) {
        let i = 0;
        changingText.textContent = "";
        const interval = setInterval(() => {
            changingText.textContent += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(interval);
                setTimeout(callback, 500); // Wait for 0.5 seconds before calling the callback
            }
        }, 100); // Adjust typing speed here
    }

    // Function to cycle through texts
    function cycleText() {
        typeText(texts[index], () => {
            changingText.classList.add("fading"); // Apply fade-out effect
            setTimeout(() => {
                changingText.classList.remove("fading");
                index = (index + 1) % texts.length; // Move to the next text
                cycleText(); // Start typing the next text
            }, 500); // Time for fade-out effect
        });
    }

    // Start the text animation after a 2-second delay
    setTimeout(() => {
        cycleText();
    }, 2000); // 2 seconds delay
});



// Hamburger Small Screen
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});







// Portfolio
// JavaScript
// JavaScript
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolio-modal');
const slideshowContainer = document.querySelector('.slideshow-container');
const modalVideo = document.getElementById('modal-video');
const videoContainer = document.querySelector('.modal-video');
const closeModal = document.querySelector('.close');
let currentSlide = 0;
let slides = [];

// Handle click on portfolio items
portfolioItems.forEach((item) => {
    item.addEventListener('click', () => {
        const images = item.getAttribute('data-images').split(',');
        const video = item.getAttribute('data-video');
        showSlideshow(images, video);
    });
});

function showSlideshow(images, video) {
    // Clear previous slides
    slideshowContainer.innerHTML = '';
    slides = [];

    // Create image slides
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        if (index === 0) {
            img.classList.add('active'); // Add 'active' class only to the first image
        }
        slideshowContainer.appendChild(img);
        slides.push(img);
    });

    // Show or hide video
    if (video && video.trim() !== '') {
        modalVideo.querySelector('source').src = video;
        modalVideo.load();
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
    }

    // Center and scale the image
    if (slides.length > 0) {
        slides[0].classList.add('scaled');
    }

    // Show modal
    modal.style.display = 'block';
    currentSlide = 0;
    showSlide(currentSlide); // Ensure the first slide is shown
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';

    // Remove scaling class when modal is closed
    const scaledImage = slideshowContainer.querySelector('img.scaled');
    if (scaledImage) {
        scaledImage.classList.remove('scaled');
    }
});

document.querySelector('.next').addEventListener('click', () => {
    showNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    showPrevSlide();
});

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function showPrevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        
        // Remove scaling class when modal is closed
        const scaledImage = slideshowContainer.querySelector('img.scaled');
        if (scaledImage) {
            scaledImage.classList.remove('scaled');
        }
    }
});
