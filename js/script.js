
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ========================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ========================================
// DYNAMIC FOOTER YEAR
// ========================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

// Get all sections that have an ID
const sections = document.querySelectorAll("section[id]");

// Get all navigation links
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});
