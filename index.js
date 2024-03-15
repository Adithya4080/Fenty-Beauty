const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".categories");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
    const leftBtn = document.getElementById("brands-btn-left");
    const rightBtn = document.getElementById("brands-btn-right");
    const move = document.querySelector('.brands-item');
    const scrollDistance = move.querySelector('.brands-img').offsetWidth;
    let scrollInterval;

    function scrollRight() {
        move.scrollLeft += scrollDistance;
    }
    function scrollLeft() {
        move.scrollLeft -= scrollDistance;
    }
    rightBtn.addEventListener("click", function(event) {
        scrollRight();
    });
    leftBtn.addEventListener("click", function(event) {
        scrollLeft();
    });
    function startAutoScroll() {
        scrollInterval = setInterval(scrollRight, 5000); 
    }

    function stopAutoScroll() {
        clearInterval(scrollInterval);
    }

    startAutoScroll();
    move.addEventListener("mouseenter", stopAutoScroll);
    move.addEventListener("mouseleave", startAutoScroll);
});

