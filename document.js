// Countdown Timer
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('April 21, 2025 19:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        countdownElement.innerHTML = "We're Married!";
    }
}

setInterval(updateCountdown, 1000);

// RSVP Form Confirmation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your RSVP! Looking forward to celebrating with you.");
});
