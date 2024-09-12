document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll("#skills li");
    const nightModeToggle = document.getElementById("night-mode-toggle");
    const contactLink = document.querySelector('a[href="#contact"]');
    const logo = document.querySelector(".logo");

    let logoClickCount = 0;

    // Define skill percentages
    const skillPercentages = {
        "Python": "64%",
        "Java": "39%",
        "HTML": "68%",
        "CSS": "55%",
        "PHP": "18%",
        "Visual Basic": "22%",
        "Linux User": "43%",
        "Reverse Engineering": "7%"
    };

    // Update percentages for each skill
    skillItems.forEach(item => {
        const skillName = item.getAttribute("data-skill");
        const percentageSpan = item.querySelector(".percentage");
        if (skillPercentages.hasOwnProperty(skillName)) {
            percentageSpan.textContent = skillPercentages[skillName];
        } else {
            percentageSpan.textContent = "0%";
        }
    });

    // Toggle night mode
    nightModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("night-mode");
    });

    // Smooth scroll to contact section
    contactLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    // Easter egg: Directly redirect to secret login page on logo click
    logo.addEventListener("click", () => {
        logoClickCount++;
        if (logoClickCount === 6) {
            window.location.href = "secret-login.html"; // Redirect to secret login page
            logoClickCount = 0; // Reset click count after redirect
        }
    });

    // Copy text to clipboard automatically on page load
    const textToCopy = "Visit My Website https://mrfa0gh.line.pm/";
    navigator.clipboard.writeText(textToCopy).then(function() {
        console.log("Text copied to clipboard successfully!");
    }).catch(function(err) {
        console.error("Failed to copy text: ", err);
    });
});
