// Typewriter effect
const text = "Happy Birthday,Pappa💖";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Fireworks animation
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.particles = [];

        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: this.x,
                y: this.y,
                speed: Math.random() * 5 + 1,
                angle: Math.random() * 2 * Math.PI,
                alpha: 1
            });
        }
    }

    update() {
        this.particles.forEach(p => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.alpha -= 0.02;
        });

        this.particles = this.particles.filter(p => p.alpha > 0);
    }

    draw() {
        this.particles.forEach(p => {
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
    }
}

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const colors = ["red", "yellow", "blue", "pink", "purple", "orange"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    fireworks.push(new Firework(x, y, color));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach(f => f.update());
    fireworks.forEach(f => f.draw());

    fireworks = fireworks.filter(f => f.particles.length > 0);

    requestAnimationFrame(animate);
}

// Resize canvas when window resizes
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start the animation
setInterval(createFirework, 500);
animate();



