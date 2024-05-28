export const header = () => {
    const hamburguerButton = document.getElementById("hamburguer");
    const navMenu = document.getElementById("navMenu");
    const header = document.querySelector(".headerContainer");

    hamburguerButton.addEventListener("focus", () => {
        navMenu.classList.remove("hidden");
        navMenu.classList.add("show");
    });
    
    hamburguerButton.addEventListener("blur", (event) => {
        if (!navMenu.contains(event.relatedTarget)) {
            navMenu.classList.remove("show");
            navMenu.classList.add("hidden");
        }
    });
    
    navMenu.addEventListener("blur", (event) => {
        if (!navMenu.contains(event.relatedTarget) && event.relatedTarget !== hamburguerButton) {
            navMenu.classList.remove("show");
            navMenu.classList.add("hidden");
        }
    }, true);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            gsap.to(header, { 
                duration: 0.5, 
                backgroundColor: "rgba(255, 255, 255, 0.8)", 
                backdropFilter: "blur(20px)"
            });
        } else {
            gsap.to(header, { 
                duration: 0.5, 
                backgroundColor: "transparent", 
                backdropFilter: "blur(0px)"
            });
        }
    });
};
