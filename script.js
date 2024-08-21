//Slideshow Script
const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if (slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

//Navbar Active Page Script
document.addEventListener('DOMContentLoaded', () => {
    // Get the current URL path
    const activePage = window.location.pathname;

    // Select all links in the navbar
    const navLinks = document.querySelectorAll('header .navbar a');

    navLinks.forEach(link => {
        // Extract the path from the href attribute
        const linkPath = new URL(link.href, window.location.origin).pathname;

        // Remove leading slash from paths for a consistent comparison
        const normalizedActivePage = activePage.replace(/^\/|\/$/g, '');
        const normalizedLinkPath = linkPath.replace(/^\/|\/$/g, '');

        // Check if the link path matches the current page path
        if (normalizedLinkPath === normalizedActivePage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});