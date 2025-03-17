document.addEventListener('DOMContentLoaded', () => {
    const weddingDate = new Date('April 21, 2025 17:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            document.getElementById('timer').innerHTML = "The Wedding is Happening!";
        }
    }

    setInterval(updateCountdown, 1000);
});
