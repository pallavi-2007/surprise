// Function to blow out the candle when clicked
function blowCandle(candle) {
    let flame = candle.querySelector('.flame');
    if (flame) {
        flame.style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => flame.remove(), 500);
    }
}

// Function to generate floating bubbles (celebration effect)
function createBubbles() {
    const container = document.querySelector('.background-animation');
    for (let i = 0; i < 30; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = (Math.random() * 3 + 2) + "s";
        bubble.style.opacity = Math.random();
        container.appendChild(bubble);

        setTimeout(() => bubble.remove(), 5000);
    }
}

setInterval(createBubbles, 1000);









