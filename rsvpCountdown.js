function rsvpCountdown() {
    const rsvpDeadline = new Date("April 10, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = rsvpDeadline - now;

    if (difference < 0) {
        document.getElementById("rsvp-countdown").innerHTML = "RSVP Closed!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("rsvp-countdown").innerHTML = 
        `Hurry! RSVP closes in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(rsvpCountdown, 1000);
