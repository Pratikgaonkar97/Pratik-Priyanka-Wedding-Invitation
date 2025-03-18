@@ -1,46 +1,14 @@
 // script.js
 document.addEventListener('DOMContentLoaded', () => {
     const weddingDate = new Date('April 21, 2025 17:00:00').getTime();
 
     function updateCountdown() {
         const now = new Date().getTime();
         const distance = weddingDate - now;
 
         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
         document.getElementById('days').innerText = days;
         document.getElementById('hours').innerText = hours;
         document.getElementById('minutes').innerText = minutes;
         document.getElementById('seconds').innerText = seconds;
 
         if (distance < 0) {
             clearInterval(countdownInterval);
             document.getElementById('countdown').innerText = "The Wedding Has Started!";
         }
     }
 
     const countdownInterval = setInterval(updateCountdown, 1000);
     updateCountdown();
 
     document.addEventListener("DOMContentLoaded", function () {
     const heartsContainer = document.querySelector(".hearts-container");
 
     function createHeart() {
         const heart = document.createElement("div");
         heart.classList.add("heart");
         heart.style.left = Math.random() * 100 + "vw";
         heart.style.animationDuration = Math.random() * 2 + 3 + "s";
         heartsContainer.appendChild(heart);
 
         setTimeout(() => {
             heart.remove();
         }, 4000);
     }
 
     setInterval(createHeart, 500);
 });
 
 document.addEventListener("DOMContentLoaded", function () {
     const dropdownButtons = document.querySelectorAll(".dropdown-btn");
 
     dropdownButtons.forEach((button) => {
         button.addEventListener("click", function () {
             const content = this.nextElementSibling;
             content.classList.toggle("show");
             this.classList.toggle("active");
         });
     });
 
     // Keep Engagement section open by default
     document.querySelector(".dropdown-content").classList.add("show");
 });document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.classList.toggle("show");
            this.classList.toggle("active");
        });
    });

    // Keep Engagement section open by default
    document.querySelector(".dropdown-content").classList.add("show");
});
