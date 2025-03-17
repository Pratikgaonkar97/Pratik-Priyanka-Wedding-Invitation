document.addEventListener('DOMContentLoaded', () => {
    const weddingDate = new Date('April 21, 2025 12:37:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').innerHTML = "The wedding has begun!";
        }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
