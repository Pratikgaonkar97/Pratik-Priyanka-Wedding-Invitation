// Countdown Timer for the Wedding Day
document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    const weddingDate = new Date("April 21, 2025 19:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft < 0) {
            countdownElement.innerHTML = "Hooray! It's our Wedding Day! 🎉";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});

// RSVP Form Submission (Basic Placeholder)
document.querySelector(".rsvp form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for RSVPing! We can't wait to celebrate with you! 🎊");
});
