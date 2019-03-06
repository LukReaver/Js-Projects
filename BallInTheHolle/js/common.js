const canvas = document.getElementById("app");
window.addEventListener("deviceorientation", orientationHandler);

let posX;
let posY;
let posXStart = canvas.clientWidth / 2;
let posYStart = canvas.clientHeight / 2;
let radius = 20;
var circle = new Path2D();
const sensitive = 3;
let leftBorder = 0 + radius;
let rightBorder = canvas.clientWidth - radius;
let topBorder = 0 + radius;
let bottomBorder = canvas.clientHeight - radius;

if (canvas.getContext) {
  // canvas.addEventListener('mousemove',fnct)
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  var ctx = canvas.getContext("2d");

  // circle.arc(posXStart,posYStart, 25, 0, 2 * Math.PI);
  // ctx.fill(circle);

  animationLoop();
} else {
  // canvas-unsupported code here
}

function animationLoop() {
  // posX = evt.x;
  // posY = evt.y;
  // console.log(posX)
  // console.log(posY)
  // console.dir(canvas)
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  // ctx.clearRect(45, 45, 600, 600);
  // ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(posXStart, posYStart, radius, 0, 2 * Math.PI);
  ctx.fill();

  // circle.arc(posXStart, posYStart, 25, 0, 2 * Math.PI);
  // ctx.fill(circle);
  ctx.closePath();

  // console.log(posXStart)
  // console.log(posYStart)
  requestAnimationFrame(animationLoop);
}

function orientationHandler(evt) {
  let axisY = parseInt(evt.gamma, 10);
  let axisX = parseInt(evt.beta, 10);
  // let axisX = evt.beta;

  // console.log('alp: '+evt.alpha)
  // console.log('bet: '+evt.beta)

  //prawo 90 lewo -90
  console.log(axisY);
  // console.log(((axisX*(-1))/10)*(-1));
  // console.log(axisX);

  let speedtop = (axisX*(-1))/5
  let speedbot = axisX/5
 
  let speedRight = axisY/5
  let speedLeft = (axisY*(-1))/5


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
