// Function to create smooth falling hearts
function createHearts() {
    const heartContainer = document.querySelector(".hearts-container");

    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️"; // Perfect heart shape
        heart.style.left = Math.random() * 100 + "vw";  // Random left position
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";  // Random fall duration
        heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Random small heart size
        heart.style.animationTimingFunction = "ease-in-out";  // Smooth falling effect
        heartContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}

createHearts();

// Redirect to another page (modify as needed)
function goToNextPage() {
    window.location.href = "second.html"; // Change this to your next page
}

// Hide browser UI when opened in full screen
document.documentElement.requestFullscreen();



