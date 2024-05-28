export const header = () => {
    const hamburguerButton = document.getElementById("hamburguer");
    const navMenu = document.getElementById("navMenu");
    const header = document.querySelector(".headerContainer");

    const toggleNavMenu = () => {
        if (navMenu.classList.contains("hidden")) {
            navMenu.classList.remove("hidden");
            navMenu.classList.add("show");
            hamburguerButton.classList.add("focused");
        } else {
            navMenu.classList.remove("show");
            navMenu.classList.add("hidden");
            hamburguerButton.classList.remove("focused");
        }
    };

    hamburguerButton.addEventListener("click", toggleNavMenu);

    hamburguerButton.addEventListener("blur", (event) => {
        if (!navMenu.contains(event.relatedTarget) && event.relatedTarget !== hamburguerButton) {
            navMenu.classList.remove("show");
            navMenu.classList.add("hidden");
            hamburguerButton.classList.remove("focused");
        }
    });

    navMenu.addEventListener("blur", (event) => {
        if (!navMenu.contains(event.relatedTarget) && event.relatedTarget !== hamburguerButton) {
            navMenu.classList.remove("show");
            navMenu.classList.add("hidden");
            hamburguerButton.classList.remove("focused");
        }
    }, true);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            gsap.to(header, { 
                duration: 0.5, 
                backgroundColor: "rgba(255, 255, 255, 0.8)", 
                backdropFilter: "blur(10px)"
            });
        } else {
            gsap.to(header, { 
                duration: 0.5, 
                backgroundColor: "transparent", 
                backdropFilter: "blur(0px)"
            });
        }
    });

    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && event.target !== hamburguerButton && !hamburguerButton.contains(event.target)) {
            navMenu.classList.remove("show");
            navMenu.classList.add("hidden");
            hamburguerButton.classList.remove("focused");
        }
    });
};