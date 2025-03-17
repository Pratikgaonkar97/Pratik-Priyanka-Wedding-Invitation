// Countdown Timer
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('April 21, 2025 19:00:00').getTime();
let countdownInterval;

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "🎉 We're Married!";
        clearInterval(countdownInterval); // Stop the countdown
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// RSVP Form Confirmation with Local Storage
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name && email) {
        localStorage.setItem("rsvpConfirmed", "true");
        document.getElementById("rsvp-message").innerText = `🎉 Thank you, ${name}! Your RSVP is confirmed.`;
        document.getElementById("rsvp-form").reset();
    }
});

// Check if RSVP is already confirmed
if (localStorage.getItem("rsvpConfirmed")) {
    document.getElementById("rsvp-message").innerText = "✅ You have already RSVP'd. See you at the wedding!";
}
