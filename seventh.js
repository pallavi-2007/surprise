const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
const video = document.getElementById("birthdayVideo");
const scratchCard = document.querySelector(".scratch-card");

let isScratching = false;

canvas.width = scratchCard.clientWidth;
canvas.height = scratchCard.clientHeight;

ctx.fillStyle = "#ff4081";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("mousedown", () => isScratching = true);
canvas.addEventListener("mouseup", () => isScratching = false);
canvas.addEventListener("mouseleave", () => isScratching = false);

canvas.addEventListener("mousemove", function (e) {
    if (!isScratching) return;
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
});

canvas.addEventListener("touchstart", () => isScratching = true);
canvas.addEventListener("touchend", () => isScratching = false);
canvas.addEventListener("touchmove", function (e) {
    if (!isScratching) return;
    let rect = canvas.getBoundingClientRect();
    let x = e.touches[0].clientX - rect.left;
    let y = e.touches[0].clientY - rect.top;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
});

setTimeout(() => {
    let interval = setInterval(() => {
        let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let visiblePixels = 0;
        for (let i = 3; i < data.length; i += 4) {
            if (data[i] > 0) visiblePixels++;
        }
        if (visiblePixels < canvas.width * canvas.height * 0.3) {
            canvas.style.display = "none";
            video.style.display = "block";
            video.play(); // Auto-play the video
            video.muted = false; // Ensure audio plays
            video.setAttribute("autoplay", "true");
            video.setAttribute("playsinline", "true");
            clearInterval(interval);
        }
    }, 500);
}, 1000);
