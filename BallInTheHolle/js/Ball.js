// import { Sx,Sy } from '../index.js';

const canvas = document.getElementById("app");
var ctx = canvas.getContext("2d");
const Vmax = 3;

// let leftBorder = 0 + radius;
// let rightBorder = canvas.clientWidth - radius;
// let topBorder = 0 + radius;
// let bottomBorder = canvas.clientHeight - radius;

// border = {
//   top: (0 + this.radius),
//   bottom: canvas.clientHeight - this.radius,
//   left:(0 + this.radius),
//   right:canvas.clientWidth - this.radius,
// }
export default class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.vx = 0;
    this.fx = 0;
    this.y = y;
    this.vy = 0;
    this.fy = 0;
    this.radius = radius;
    this.color = color;
  }

  update() {
      this.x += this.vx;
    if ((this.x + this.vx) < this.radius) {
      this.x = this.radius;
    } else if ((this.x + this.vx) > canvas.clientWidth - this.radius) {
      this.x = canvas.clientWidth - this.radius;
    }
      this.y += this.vy;
    if ((this.y + this.vy) < this.radius) {
      this.y = this.radius;
    } else if ((this.y + this.vy) > canvas.clientHeight - this.radius) {
      this.y = canvas.clientHeight - this.radius;
    }
    console.log(this.x );
    console.log(this.fx);
    // this.draw();
    //  border.top
  }
  applyForce() {
    this.vx += this.fx;
    this.vx = this.limit(this.vx, -Vmax, Vmax);

    this.vy += this.fy;
    this.vy = this.limit(this.vy, -Vmax, Vmax);
  }
  setForce(fx, fy) {
    this.fx = fx;
    this.fy = fy;
  }

  limit(velocity, lowVmax, upVmax) {
    if (velocity < lowVmax) {
      return lowVmax;
    } else if (velocity > upVmax) {
      return upVmax;
    } else {
      return velocity;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
