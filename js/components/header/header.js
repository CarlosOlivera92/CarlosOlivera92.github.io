export const header = () => {
    const hamburguerButton = document.getElementById("hamburguer");
    const navMenu = document.getElementById("navMenu");
    
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
};
