// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.textContent = isOpen ? "×" : "☰";
    });


    // Close menu after clicking a navigation link
    document.querySelectorAll(".nav a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";
        });

    });
}


// =========================================================
// SCROLL REVEAL ANIMATION
// =========================================================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.1
    }
);


// Elements that should animate when entering the viewport
document
    .querySelectorAll(
        "section, .project-card, .skill, .timeline article, .edu-grid article"
    )
    .forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


// =========================================================
// CURRENT YEAR
// =========================================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}