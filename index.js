const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".categories");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// slider
let slideIndex = 1;
let slides = document.getElementsByClassName("brands-list");

function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    else if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (let i = slideIndex-1; i < slideIndex+2; i++) {
        slides[i % slides.length].style.display = "block"; 
        slides[i % slides.length].style.animation = "fadein 0.5s"; 
    }
}

function autoSlide() {
    showSlides(slideIndex += 3);
}

showSlides(slideIndex);

let slideInterval = setInterval(autoSlide, 12000);

document.getElementById("brands-btn-right").addEventListener("click", function() {
    clearInterval(slideInterval);
    showSlides(slideIndex += 3);
    slideInterval = setInterval(autoSlide, 12000);
});

document.getElementById("brands-btn-left").addEventListener("click", function() {
    clearInterval(slideInterval);
    showSlides(slideIndex -= 3);
    slideInterval = setInterval(autoSlide, 12000); 
});

// Sign In Modal
const btn = document.getElementById("signInBtn");
const modal = document.querySelector(".modal-cont");

btn.onclick = function (){
    modal.style.display = "block";
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

// Signin into Username
const form = document.querySelector('.modal-content form');
const userIcon = document.querySelector('.fa-user');
const signInText = document.getElementById('signInBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    signInText.textContent = username;
    userIcon.className = 'fa-solid fa-power-off';
    modal.style.display = 'none';
});

// Sign Out
userIcon.addEventListener('click', function() {
    userIcon.className = 'fa-regular fa-user';
    signInText.textContent = 'Sign In';
});
