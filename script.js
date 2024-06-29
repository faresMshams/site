document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll("#skills li");
    const nightModeToggle = document.getElementById("night-mode-toggle");
    const contactLink = document.querySelector('a[href="#contact"]');

    // تعريف نسب المهارات
    const skillPercentages = {
        "Python": "70%",
        "Java": "50%",
        "HTML": "80%",
        "CSS": "70%",
        "PHP": "40%",
        "Visual Basic": "50%",
        "Linux User": "58%",
        "Reverse Engineering": "5%"
    };
    
    // تحديث النسب لكل مهارة
    skillItems.forEach(item => {
        const skillName = item.getAttribute("data-skill");
        const percentageSpan = item.querySelector(".percentage");
        if (skillPercentages.hasOwnProperty(skillName)) {
            percentageSpan.textContent = skillPercentages[skillName];
        } else {
            percentageSpan.textContent = "0%";
        }
    });

    // التبديل بين وضع النهار والليل
    nightModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("night-mode");
    });

    // التعامل مع النقر على رابط الاتصال
    contactLink.addEventListener("click", (event) => {
        event.preventDefault(); // منع السلوك الافتراضي لمتابعة الرابط
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});
