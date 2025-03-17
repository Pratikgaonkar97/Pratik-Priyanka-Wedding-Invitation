document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function countdown() {
        const weddingDate = new Date("April 21, 2025 19:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(countdown, 1000);

    // RSVP Form Submission
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your RSVP!");
    });
});
