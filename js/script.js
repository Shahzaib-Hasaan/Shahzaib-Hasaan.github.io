// script.js

// Function to toggle the visibility of the back-to-top button
function toggleBackToTopButton() {
    const backToTopButton = document.querySelector('.back-to-top');

    // Show the button when scrolled down, hide it when at the top
    if (window.scrollY > 100) { // Adjust this value to control when the button appears
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// Attach an event listener to the window's scroll event
window.addEventListener('scroll', toggleBackToTopButton);

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Smooth scrolling for back-to-top link
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
