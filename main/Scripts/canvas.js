let canvas = document.getElementsByTagName('canvas')[0];
let scoreElement = document.getElementById('score');
let countdownElement = document.getElementById('countdown');

let score = 0;
let countdown = 30;
countdownElement.innerHTML = "Countdown: " + countdown;

let height = canvas.height = 400;
let width = canvas.width = 400;
let c = canvas.getContext('2d');
canvas.addEventListener("mousedown", getClickPosition, false);
canvas.addEventListener("touchstart", getClickPosition, false);

function getClickPosition(event) {
    let x = event.x;
    let y = event.y;

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    let zone;
    if (event.type == "touchstart")
        zone = ball.radius + ball.radius * 0.5;
    else
        zone = ball.radius;
        

    if (x > ball.x - zone && x < ball.x + zone &&
        y > ball.y - zone && y < ball.y + zone) {
        score++;
        ball = new Ball(radius--, velocity++);
        scoreElement.innerHTML = "Score: " + score;
    }

}

class Ball {
    constructor(radius, velocity) {
        this.radius = radius;
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
        c.fillStyle = "#F26925";
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
    if (countdown < 0) {
        alert("Game over. Your score is " + score + "! Press OK to play again.");
        countdown = 0;
        location.reload();
    }
    countdownElement.innerHTML = "Countdown: " + countdown;
    countdown -= 1;
}, 1000);
 
let radius = 30;
let velocity = 2;
let ball = new Ball(radius, velocity);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);

    ball.update();
}

animate();

