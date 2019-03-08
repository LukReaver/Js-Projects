import Circle  from './js/Ball.js';

const canvas = document.getElementById("app");
// window.addEventListener("deviceorientation", orientationHandler);
canvas.addEventListener("mousemove", mouse);

let posX;
let posY;
let posXStart = canvas.clientWidth / 2;
let posYStart = canvas.clientHeight / 2;
let radius = 20;
// var circle = new Path2D();
const sensitive = 3;
let leftBorder = 0 + radius;
let rightBorder = canvas.clientWidth - radius;
let topBorder = 0 + radius;
let bottomBorder = canvas.clientHeight - radius;
let blackBall;
const rndArray = [];

if (canvas.getContext) {
  // canvas.addEventListener('mousemove',fnct)
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  var ctx = canvas.getContext("2d");

  blackBall = new Circle(posXStart, posYStart, radius, "black");
  // circle.arc(posXStart,posYStart, 25, 0, 2 * Math.PI);
  // ctx.fill(circle);

  //  drawRandomPositions(10)
  animationLoop();
} else {
  // canvas-unsupported code here
}

function animationLoop() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  for (let el of rndArray) {
    el.draw();
  }

  // posX = evt.x;
  // posY = evt.y;
  // console.log(posX)
  // console.log(posY)
  // console.dir(canvas)

  // ctx.clearRect(45, 45, 600, 600);
  // ctx.clearRect(0, 0, innerWidth, innerHeight);
  // ctx.beginPath();
  // ctx.arc(posXStart, posYStart, radius, 0, 2 * Math.PI);
  // ctx.fillStyle = "black";
  // ctx.fill();

  // circle.arc(posXStart, posYStart, 25, 0, 2 * Math.PI);
  // ctx.fill(circle);
  //ctx.closePath();

  // console.log(posXStart)
  // console.log(posYStart)
  // blackBall.draw();
  requestAnimationFrame(animationLoop);
}

function orientationHandler(evt) {
  let axisY = parseInt(evt.gamma, 10);
  let axisX = parseInt(evt.beta, 10);
  // let axisX = evt.beta;

  // console.log('alp: '+evt.alpha)
  // console.log('bet: '+evt.beta)

  //prawo 90 lewo -90
  // console.log(axisY);
  // console.log(((axisX*(-1))/10)*(-1));
  // console.log(axisX);

  let speedtop = (axisX * -1) / 5;
  let speedbot = axisX / 5;

  let speedRight = axisY / 5;
  let speedLeft = (axisY * -1) / 5;

  if (axisY > sensitive && rightBorder > posXStart) {
    posXStart += speedRight;
  } else if (axisY < -sensitive && leftBorder < posXStart) {
    posXStart -= speedLeft;
  }

  if (axisX < -sensitive && posYStart > topBorder) {
    posYStart -= speedtop;
  } else if (axisX > sensitive && posYStart < bottomBorder) {
    posYStart += speedbot;
  }
}
function mouse(e) {
  // console.log(e);
  // console.log(e.y);

  blackBall.x = e.layerX;
  blackBall.y = e.layerY;
  // blackBall.update();
}

function drawRandomPositions(dlug) {
  //----losowanie bez kolizji
  //-
  rndArray.push(blackBall);

  const minX = radius;
  const maxX = canvas.clientWidth - radius;
  const minY = radius;
  const maxY = canvas.clientHeight - radius;

  for (let i = 0; i < dlug; i++) {
    let rndX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
    let rndY = Math.floor(Math.random() * (maxY - minY + 1) + minY);

    if (i !== 0) {
      for (let j = 0; j < rndArray.length; j++) {
        if (
          // getDistance2({x:rndX, y:rndY}, rndArray[j])
          getDistance(rndX, rndY, rndArray[j].x, rndArray[j].y) - radius * 2 <
          0
        ) {
          console.log("ta");
          rndX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
          rndY = Math.floor(Math.random() * (maxY - minY + 1) + minY);
          j--;
        }
      }
    }
    rndArray.push(new Circle(rndX, rndY, radius, "orange"));
  }
}

drawRandomPositions(10);
console.log(rndArray);

// function
for (let el of rndArray) {
  el.draw();
}

function getDistance(x1, y1, x2, y2) {
  let xDistance = x1 - x2;
  let yDistance = y1 - y2;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
// function getDistance2(obj1, obj2) {
//   let yDistance = obj1.y - obj2.y;
//   let xDistance = obj1.x - obj2.x;
//   return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2) < (obj1.radius + obj2.radius) );
// }
