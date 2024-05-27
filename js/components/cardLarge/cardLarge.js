export const cardLarge = () => {
    const cardLarge = document.getElementsByClassName("cardLarge");
    Array.from(cardLarge).forEach( cardItem => {
        const arrowButton = cardItem.querySelector(".cardHeader .arrow");
        const cardContent = cardItem.querySelector(".cardContent");

        arrowButton.addEventListener("click", () => {
            cardContent.classList.toggle("hidden");
        
            if (cardContent.classList.contains("hidden")) {
                gsap.to(cardContent, {
                    duration: 0.5,
                    height: 0, 
                    ease: "power2.inOut",
                    onComplete: () => {
                        cardContent.style.height = ""; 
                    }
                });
            } else {
                cardContent.style.height = "auto";
                const height = cardContent.clientHeight; 
                cardContent.style.height = "0"; 
                gsap.to(cardContent, {
                    duration: 0.5,
                    height: height, 
                    ease: "power2.inOut"
                });
            }
        
            cardContent.classList.toggle("show");

            gsap.to(arrowButton, {
                duration: 0.5,
                rotation: cardContent.classList.contains("show") ? 180 : 0, 
                ease: "power2.inOut"
            });
        });
    });
};
