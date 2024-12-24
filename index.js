const toggleButton = document.getElementById('darkModeToggle'); //define a constant called toggle button
const body = document.body; // define a constant called body


if (localStorage.getItem('theme') === 'dark') { //checks if the theme id set to dark 
    body.classList.add('dark-mode');  //changes the everything to dark mode 
}


toggleButton.addEventListener('click', () => {  //click means once the togglebutton is clicked,the fuction after it will be called. the fuction here is an arrow fuction

    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});



let slideIndex = 0; // define a variable to set the default value of the slid to 0
let slides = document.getElementsByClassName("slide"); // Get all slide elements

// Function to change the current slide
function changeSlide(n) {
    // Call showSlide with updated index
    showSlide(slideIndex += n);
}

// Function to display the current slide
function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0; // If we've reached the last image, go back to the first image
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // If we've reached the first image, go to the last image
    }

    // Hide all slides and prevent them form overlaping on top of each other
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

// Show the first slide initially
showSlide(slideIndex);


document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



