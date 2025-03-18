document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer Function
    function updateCountdown() {
        const weddingDate = new Date("April 21, 2025 17:00:00").getTime();
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference < 0) {
            document.getElementById("countdown").innerHTML = "🎉 The Wedding is Happening Now!";
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

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Smooth Scroll for Sections
    document.querySelectorAll(".event h3").forEach(header => {
        header.addEventListener("click", function () {
            this.parentElement.classList.toggle("expand");
            this.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Auto Play Background Music with User Interaction
    const backgroundMusic = document.querySelector("audio");
    
    function playMusic() {
        backgroundMusic.play();
        document.removeEventListener("click", playMusic);
    }

    document.addEventListener("click", playMusic);
});
