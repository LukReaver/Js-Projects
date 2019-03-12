import { config } from '../index.js';

const canvas = document.getElementById("app");
var ctx = canvas.getContext("2d");
// export const config.Vmax = 5;
// export const Sx = 0.7
// export const Sy = 0.7
// export const config.deceleration = 0.5

export class Circle {
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

    this.x += this.vx;   // console.log(this.vx)
    if ((this.x + this.vx) < this.radius) {
      this.vx += config.deceleration
      this.x = this.radius;
      this.vx = -this.vx;
    }
    else if ((this.x + this.vx) > canvas.clientWidth - this.radius) {
       this.vx -= config.deceleration
       this.x = canvas.clientWidth - this.radius;
       this.vx = -this.vx
    }

    this.y += this.vy;
    if ((this.y + this.vy) < this.radius) {
      this.vy += config.deceleration
      this.y = this.radius;
      this.vy = -this.vy
    } else if ((this.y + this.vy) > canvas.clientHeight - this.radius) {
      this.vy -= config.deceleration
      this.y = canvas.clientHeight - this.radius;
      this.vy = -this.vy
    }
  }

  applyForce() {
    this.vx += this.fx;
    this.vx = this.limit(this.vx, -config.Vmax, config.Vmax);

    this.vy += this.fy;
    this.vy = this.limit(this.vy, -config.Vmax, config.Vmax);
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
    ctx.closePath();
  }
}


