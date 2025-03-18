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
});
