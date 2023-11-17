require ('../css/styles.css')
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            navLinks.forEach(function (otherLink) {
                otherLink.classList.remove("activo");
            });

            link.classList.add("activo");

            const targetId = link.getAttribute("href").substring(1);

            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
            });

            const currentSection = document.querySelector(".seccion-actual");
            if (currentSection) {
                currentSection.classList.remove("seccion-actual");
            }
            document.getElementById(targetId).classList.add("seccion-actual");
        });
    });
});
