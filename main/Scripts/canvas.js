let canvas = document.getElementsByTagName('canvas')[0];
let scoreElement = document.getElementById('score');
let countdownElement = document.getElementById('countdown');

let isPaused = false;
let score = 0;
let countdown = 30;
countdownElement.innerHTML = "Countdown: " + countdown;

let height = canvas.height = 400;
let width = canvas.width = 400;
let c = canvas.getContext('2d');
canvas.addEventListener("mousedown", getClickPosition, false);
canvas.addEventListener("touchstart", getClickPosition, false);

let clickX;
let clickY;

function getClickPosition(event) {

    let clickX = event.x;
    let clickY = event.y;

    clickX -= canvas.offsetLeft;
    clickY -= canvas.offsetTop;

    if (event.type == "touchstart")
        hitZone = ball.radius*2;

    if (clickX > ball.x - hitZone && clickX < ball.x + hitZone &&
        clickY > ball.y - hitZone && clickY < ball.y + hitZone)
        hit();
}

function hit() {
    isPaused = true;
    ball.dx = 0;
    ball.dy = 0;
    ball.color = 'red';
    setTimeout(pauseFunc, 1000);
}

function pauseFunc() {
    score++;
    scoreElement.innerHTML = "Score: " + score;
    ball = new Ball(radius--, velocity++);
    hitZone = ball.radius;
    ball.color = "#F26925";
    isPaused = false;
}

class Ball {
    constructor(radius, velocity, color) {
        this.radius = radius;
        this.color = color;
        this.x = Math.random() * (width - radius * 2) + radius;
        this.y = Math.random() * (height - radius * 2) + radius;
        let dir = Math.random() * Math.PI * 2;
        this.dx = velocity * Math.cos(dir);
        this.dy = velocity * Math.sin(dir);
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.lineWidth = 3;
        c.strokeStyle = 'black';
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }

    update() {
        if (this.x + this.radius > width || this.x - this.radius < 0)
            this.dx = -this.dx;
        if (this.y + this.radius > width || this.y - this.radius < 0)
            this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
};

setInterval(function () {
    if (countdown <= 0) {
        alert("Game over. Your score is " + score + "! Press OK to play again.");
        countdown = 0;
        location.reload();
    }
    if (!isPaused && countdown > 0)
        countdown -= 1;
    countdownElement.innerHTML = "Countdown: " + countdown;
}, 1000);

let radius = 30;
let velocity = 2;
let color = "#F26925";
let ball = new Ball(radius, velocity, color);
let hitZone = ball.radius;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);
    ball.update();
}

animate();


