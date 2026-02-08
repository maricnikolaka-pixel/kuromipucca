document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTS
    const envelope = document.getElementById("envelope-container");
    const letter = document.getElementById("letter-container");
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".btn[alt='Yes']");
    const title = document.getElementById("letter-title");
    const catImg = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");
    const finalText = document.getElementById("final-text");
    const yesGif = document.getElementById("yes-gif");

    // OPEN LETTER
    envelope.addEventListener("click", () => {
        envelope.style.display = "none";
        letter.style.display = "flex";
        setTimeout(() => {
            document.querySelector(".letter-window").classList.add("open");
        }, 50);
    });

    // NO BUTTON HOVER ESCAPE
    noBtn.addEventListener("mouseover", () => {
        const distance = 150;
        const angle = Math.random() * 2 * Math.PI * 2;
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.3s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // YES BUTTON CLICK
    yesBtn.addEventListener("click", () => {
        // Hide title and initial GIF
        title.style.display = "none";
        catImg.style.display = "none";

        // Hide buttons
        buttons.style.display = "none";

        // Show YES GIF
        yesGif.src = "pucca-garu.gif"; // updated GIF
        yesGif.style.display = "block";
        yesGif.classList.add("show");

        // Show final text
        finalText.style.display = "block";
        finalText.classList.add("show");
    });
});
