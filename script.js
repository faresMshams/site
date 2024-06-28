document.addEventListener("DOMContentLoaded", () => {
    const percentages = document.querySelectorAll(".percentage");
    const nightModeToggle = document.getElementById("night-mode-toggle");
    const contactLink = document.querySelector('a[href="#contact"]');

    // Generate random percentages for skills
    percentages.forEach(span => {
        span.textContent = `${Math.floor(Math.random() * 101)}%`;
    });

    // Toggle night mode
    nightModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("night-mode");
    });

    // Handle clicking on contact link
    contactLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default behavior of following the link
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});
