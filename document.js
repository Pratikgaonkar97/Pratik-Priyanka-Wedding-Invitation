// Countdown Timer for Wedding Day
function updateCountdown() {
    const weddingDate = new Date("April 21, 2025 17:00:00").getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference < 0) {
        document.getElementById("countdown").innerHTML = "🎉 The Wedding Has Started! 🎉";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Update Countdown Every Second
setInterval(updateCountdown, 1000);

// Smooth Scrolling for Links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Fade-in Animation on Scroll
function revealOnScroll() {
    let reveals = document.querySelectorAll(".event");
    reveals.forEach(event => {
        let windowHeight = window.innerHeight;
        let elementTop = event.getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            event.classList.add("fade-in");
        }
    });
}

// Attach Scroll Event
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
