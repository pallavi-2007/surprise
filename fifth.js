// Function to enlarge images when clicked
function enlargeImage(element) {
    const img = element.querySelector("img");
    img.style.transform = img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
}

// Function to open the video popup
function openVideo() {
    const videoPopup = document.getElementById("videoPopup");
    const popupVideo = document.getElementById("popupVideo");

    videoPopup.style.display = "flex"; // Make popup visible

    if (popupVideo) {
        popupVideo.play();
    }
}

// Function to close the video popup (Fixed Close Button)
function closeVideo() {
    const videoPopup = document.getElementById("videoPopup");
    const popupVideo = document.getElementById("popupVideo");

    videoPopup.style.display = "none"; // Hide popup

    if (popupVideo) {
        popupVideo.pause();
        popupVideo.currentTime = 0; // Reset video
    }
}

// Function to open the image and voice note popup
function openImagePopup(imageSrc, audioSrc) {
    const imagePopup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    const popupAudio = document.getElementById("popupAudio");

    popupImage.src = imageSrc;
    popupAudio.src = audioSrc;
    popupAudio.pause(); // Ensure no autoplay
    popupAudio.currentTime = 0;

    imagePopup.style.display = "block";
}

// Function to close the image popup
function closePopup() {
    const imagePopup = document.getElementById("imagePopup");
    const popupAudio = document.getElementById("popupAudio");

    imagePopup.style.display = "none"; // Hide popup
    popupAudio.pause(); // Stop audio
    popupAudio.currentTime = 0; // Reset audio
}

// Attach click event to small hearts for image & voice popup
document.addEventListener("DOMContentLoaded", function () {
    const smallHearts = document.querySelectorAll(".small-heart");

    smallHearts.forEach(heart => {
        heart.addEventListener("click", function () {
            const imageSrc = this.getAttribute("data-image");
            const audioSrc = this.getAttribute("data-audio");

            if (document.getElementById("imagePopup").style.display === "block") {
                closePopup(); // Close if clicking again
            } else {
                openImagePopup(imageSrc, audioSrc);
            }
        });
    });

    // Ensure clicking the close button works
    document.querySelector(".close-btn").addEventListener("click", function () {
        closeVideo();
    });
});

// Redirect to the seventh page when button is clicked
function redirectToSeventh() {
    window.location.href = "seventh.html";
}

