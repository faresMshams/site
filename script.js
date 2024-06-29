document.addEventListener("DOMContentLoaded", () => {
    const percentages = document.querySelectorAll(".percentage");
    const nightModeToggle = document.getElementById("night-mode-toggle");
    const contactLink = document.querySelector('a[href="#contact"]');

    // Define skill percentages
    const skillPercentages = {
        "Python": "90%",
        "Java": "80%",
        "HTML": "85%",
        "CSS": "80%",
        "PHP": "70%",
        "Visual Basic": "60%",
        "Linux User": "95%",
        "Reverse Engineering": "75%"
    };

    // Set percentages for skills
    percentages.forEach(span => {
        const skillName = span.parentNode.textContent.trim().split(' ')[0];
        span.textContent = skillPercentages[skillName] || "0%";
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
