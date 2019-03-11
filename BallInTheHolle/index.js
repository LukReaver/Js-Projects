import { Sx, Sy, Circle } from "./js/Ball.js";
import detect from "./js/modileDetect.js";

const canvas = document.getElementById("app");


console.log(detect());

if (detect()) {
  window.addEventListener("deviceorientation", orientationHandler);
} else {
  canvas.addEventListener("mousemove", mouse);
  window.addEventListener("mousemove", mouse2);
}


let posXStart = canvas.clientWidth / 2;
let posYStart = canvas.clientHeight / 2;
let radius = 20;
const sensitive = 3;
let leftBorder = 0 + radius;
let rightBorder = canvas.clientWidth - radius;
let topBorder = 0 + radius;
let bottomBorder = canvas.clientHeight - radius;
let blackBall;
const rndArray = [];
let order = 0;

if (canvas.getContext) {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var ctx = canvas.getContext("2d");
  blackBall = new Circle(posXStart, posYStart, radius, "black");

  drawRandomPositions(20);
  rndArray[order].color = "red";

  animationLoop();
} else {
  // canvas-unsupported code here
}

function animationLoop() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  blackBall.applyForce();
  blackBall.update();
  for (let el of rndArray) {
    el.draw();
  }
  blackBall.draw();
  requestAnimationFrame(animationLoop);
}
//-------------------------------------------------------
function orientationHandler(evt) {
  colision();

  // let axisY = parseInt(evt.gamma, 10);
  let axisY = Math.round(evt.gamma)
  let axisX = Math.round(evt.beta)
  // let axisX = parseInt(evt.beta, 10);

  // console.log( mapValueX);
  console.log(axisX);
  // console.log(axisY);

  let mapValueX;
  let mapValueY;

  let halfWidth = innerWidth / 2;
  let halfHeight = innerHeight / 2;

  let pitchPhoneY = axisY - halfWidth;
  let pitchPhoneX = axisX - halfHeight;

  if (axisY < sensitive ) {
    mapValueX = mapping(pitchPhoneY, -halfWidth, halfWidth, -Sx, Sx);
    }
    // if (axisX > sensitive || axisX < -sensitive ) {
      mapValueY = mapping(pitchPhoneX, -halfHeight, halfHeight, -Sy, Sy);
      // }
      // console.log( mapValueX);
      // console.log( mapValueY);

      blackBall.setForce(mapValueX, mapValueY);
  //--------------------------------------------------

  // let speedtop = (axisX * -1) / 5;
  // let speedbot = axisX / 5;

  // let speedRight = axisY / 5;
  // let speedLeft = (axisY * -1) / 5;

  // if (axisY > sensitive && rightBorder > posXStart) {
  //   blackBall.x += speedRight;
  // } else if (axisY < -sensitive && leftBorder < posXStart) {
  //   blackBall.x -= speedLeft;
  // }

  // if (axisX < -sensitive && posYStart > topBorder) {
  //   blackBall.y -= speedtop;
  // } else if (axisX > sensitive && posYStart < bottomBorder) {
  //   blackBall.y += speedbot;
  // }
}
function mouse(e) {
  colision();

  let X = e.layerX;
  let Y = e.layerY;
  let maxX = canvas.width / 2;
  let maxY = canvas.height / 2;

  let axisX = Math.floor((X - maxX) / 15); //13
  let axisY = Math.floor((Y - maxY) / 20) * -1; //14

  canvas.style.transform = `perspective(400px) `;
  canvas.style.transform += `rotateY(${axisX}deg) `;
  canvas.style.transform += `rotateX(${axisY}deg) `;
}

function mouse2(e) {
  colision();

  let mouseX = e.x;
  let mouseY = e.y;

  let halfWidth = innerWidth / 2;
  let halfHeight = innerHeight / 2;

  let mouseFromCenterX = mouseX - halfWidth;
  let mouseFromCenterY = mouseY - halfHeight;

  let mapValueX = mapping(mouseFromCenterX, -halfWidth, halfWidth, -Sx, Sx);
  let mapValueY = mapping(mouseFromCenterY, -halfHeight, halfHeight, -Sy, Sy);

  blackBall.setForce(mapValueX, mapValueY);
}

function mapping(x, Xmin, Xmax, Ymin, Ymax) {
  let a = (Ymin - Ymax) / (Xmin - Xmax);
  let b = Ymax - a * Xmax;
  return a * x + b;
}

function drawRandomPositions(amount) {
  const minX = radius;
  const maxX = canvas.clientWidth - radius;
  const minY = radius;
  const maxY = canvas.clientHeight - radius;

  for (let i = 0; i < amount; i++) {
    let rndX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
    let rndY = Math.floor(Math.random() * (maxY - minY + 1) + minY);

    if (i !== 0) {
      for (let j = 0; j < rndArray.length; j++) {
        if (getDistance({ x: rndX, y: rndY, radius: radius }, rndArray[j])) {
          console.log("ta");
          rndX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
          rndY = Math.floor(Math.random() * (maxY - minY + 1) + minY);
          j = -1;
        }
      }
      rndArray.push(new Circle(rndX, rndY, radius, "orange"));
    }
  }
}
function getDistance(obj1, obj2) {
  let yDistance = obj1.y - obj2.y;
  let xDistance = obj1.x - obj2.x;
  let dist =
    Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)) -
    (obj1.radius + obj2.radius);
  if (dist <= 0) {
    return true;
  } else {
    return false;
  }
}

function colision() {
  for (let i = 0; i < rndArray.length; i++) {
    if (getDistance(blackBall, rndArray[i]) && i === order) {
      _.debounce(ballSequence(), 1000);
      console.log("dupa");
      console.log(order);
    }
  }
}

function ballSequence() {
  for (const el of rndArray) {
    el.color = "orange";
  }
  order++;
  rndArray[order].color = "red";
}
