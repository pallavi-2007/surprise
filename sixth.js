document.addEventListener("DOMContentLoaded", function () {
    const smallHearts = document.querySelectorAll(".small-heart");
    const mainHeart = document.getElementById("mainHeart");
    const videoPopup = document.getElementById("videoPopup");
    const videoElement = document.getElementById("videoElement");
    const imagePopup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    const popupAudio = document.getElementById("popupAudio");

    // Clicking the sparkling heart opens video popup
    mainHeart.addEventListener("click", function () {
        videoPopup.style.display = "block";
        videoElement.play();
    });

    // Clicking small hearts shows image + voice note
    smallHearts.forEach(heart => {
        heart.addEventListener("click", function () {
            const imageSrc = this.getAttribute("data-image");
            const audioSrc = this.getAttribute("data-audio");

            if (imagePopup.style.display === "block" && popupImage.src.includes(imageSrc)) {
                imagePopup.style.display = "none";  // Close if clicking the same heart
                popupAudio.pause(); // Stop audio
            } else {
                popupImage.src = imageSrc;
                popupAudio.src = audioSrc;
                popupAudio.play().catch(error => console.log("Autoplay blocked:", error)); // Ensure autoplay
                imagePopup.style.display = "block";
            }
        });
    });
});

// Close popups
function closePopup() {
    const imagePopup = document.getElementById("imagePopup");
    const popupAudio = document.getElementById("popupAudio");

    popupAudio.pause(); // Stop audio when closing
    popupAudio.currentTime = 0; // Reset audio to start
    imagePopup.style.display = "none";
}

function closeVideo() {
    const videoPopup = document.getElementById("videoPopup");
    const videoElement = document.getElementById("videoElement");

    videoElement.pause();
    videoPopup.style.display = "none";
}
