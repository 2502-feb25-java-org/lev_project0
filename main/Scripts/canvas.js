let canvas = document.getElementsByTagName('canvas')[0];

let height = canvas.height = 400;
let width = canvas.width = 400;
let c = canvas.getContext('2d');
canvas.addEventListener("mousedown", getPosition, false);

class Ball {
    constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
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



let radius = 25;
let x = Math.random() * (width - radius * 2) + radius;
let y = Math.random() * (height - radius * 2) + radius;
let dir = Math.random() * Math.PI * 2;
let vel = 4;
let dx = vel * Math.cos(dir);
let dy = vel * Math.sin(dir);

let ball = new Ball(x, y, radius, dx, dy);


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);

    ball.update();
}

animate();

function getPosition(event) {
    let x = event.x;
    let y = event.y;

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    if (x > ball.x - ball.radius && x < ball.x + ball.radius &&
        y > ball.y - ball.radius && y < ball.y + ball.radius)
        alert("HIT!");
}