import { Circle } from "./js/Ball.js";
import detect from "./js/modileDetect.js";

// fulescreen !!!!!!!
// appearse sequence
// mouse1 if width

const canvas = document.getElementById("app");
export const config = {
  Vmax: 8,
  Sx: 0.5,
  Sy: 0.5,
  deceleration: 0.7,
  introText: "Catch all red balls!",
  fontSizeIntro: 50,
  fontSizeButton: 25
};
let posXStart = canvas.clientWidth / 2;
let posYStart = canvas.clientHeight / 2;
let radius = 20;
let blackBall;
const rndArray = [];
let order = 0;

let doAnim = true;

console.log(detect());
canvas.addEventListener("click", buttonStart);

if (detect()) {
  window.addEventListener("deviceorientation", orientationHandler);
  (config.Vmax = 10),
    (config.Sx = 5),
    (config.Sy = 5),
    (config.deceleration = 0.8);
  canvas.removeEventListener("mousemove", mouse);
} else {
  canvas.addEventListener("mousemove", mouse);
  window.addEventListener("mousemove", mouse2);
  // Vmax:10,
  // Sx:5,
  // Sy:5,
  // deceleration:2,
}
//---------------------------------------------------
if (canvas.getContext) {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var ctx = canvas.getContext("2d");
  let cvHalfW = canvas.width / 2;
  // let cvHalfH = canvas.height/2;

  blackBall = new Circle(posXStart, posYStart, radius, "black");
  drawRandomPositions(2);
  rndArray[order].color = "red";

  //--------------------------------
  // intro
  ctx.fillStyle = "#368";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //banner
  ctx.font = `${config.fontSizeIntro}px serif`;
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText(config.introText, canvas.width / 2, (canvas.height * 1) / 3);
  //start button
  ctx.strokeRect(
    cvHalfW - cvHalfW / 2,
    canvas.height / 1.5,
    cvHalfW,
    config.fontSizeButton + 10
  );

  ctx.font = `${config.fontSizeButton}px serif`;
  ctx.textAlign = "center";
  ctx.fillText(
    "Start",
    canvas.width / 2,
    canvas.height / 1.5 + config.fontSizeButton
  );
  //--------------------------------

  // animationLoop();
} else {
  alert("sry, you should update your browser");
}
function buttonStart(e) {
  let cvHalfW = canvas.width / 2;
  let x = e.layerX;
  let y = e.layerY;
  if (x > cvHalfW - cvHalfW / 2) {
    if (x < cvHalfW - cvHalfW / 2 + cvHalfW) {
      if (y > canvas.height / 1.5) {
        if (
          y <
          canvas.height / 1.5 + (config.fontSizeButton + 10)) {
            // console.log('testtext')
            start();
        }
      }
    }
  }
}
let requestId;
function start() {
  if (!requestId) {
    requestId = window.requestAnimationFrame(animationLoop);
  }
}

// function stop() {
//   if (requestId) {
//     window.cancelAnimationFrame(requestId);
//     requestId = undefined;
//   }
// }
  //---------------------------------------------------
  function animationLoop() {


  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  blackBall.applyForce();
  blackBall.update();
  catchBall();
  for (let el of rndArray) {
    el.draw();
  }
  blackBall.draw();
  requestAnimationFrame(animationLoop);
}
//-----------------------------------------------------
function orientationHandler(evt) {
  let axisY = Math.round(evt.gamma); // 90 +/-
  let axisX = Math.round(evt.beta); // 180 +/-

  if (axisX > 90) {
    axisX = 90;
  } else if (axisX < -90) {
    axisX = -90;
  }
  // console.log( mapValueX);
  // console.log(axisX);
  // console.log(axisY);

  let mapValueX;
  let mapValueY;

  mapValueX = mapping(axisY, -90, 90, -config.Sx, config.Sx);
  mapValueY = mapping(axisX, -90, 90, -config.Sy, config.Sy);
  blackBall.setForce(mapValueX, mapValueY);
}
function mouse(e) {
  let X = e.layerX;
  let Y = e.layerY;
  let maxX = canvas.width / 2;
  let maxY = canvas.height / 2;

  let axisX = Math.floor((X - maxX) / 15); //13
  let axisY = Math.floor((Y - maxY) / 20) * -1; //14

  canvas.style.transform = `perspective(600px) `;
  canvas.style.transform += `rotateY(${axisX}deg) `;
  canvas.style.transform += `rotateX(${axisY}deg) `;
}

function mouse2(e) {
  let mouseX = e.x;
  let mouseY = e.y;

  let halfWidth = innerWidth / 2;
  let halfHeight = innerHeight / 2;

  let mouseFromCenterX = mouseX - halfWidth;
  let mouseFromCenterY = mouseY - halfHeight;

  let mapValueX = mapping(
    mouseFromCenterX,
    -halfWidth,
    halfWidth,
    -config.Sx,
    config.Sx
  );
  let mapValueY = mapping(
    mouseFromCenterY,
    -halfHeight,
    halfHeight,
    -config.Sy,
    config.Sy
  );

  blackBall.setForce(mapValueX, mapValueY);
}

// cofnac commita// ----------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
    }
    rndArray.push(new Circle(rndX, rndY, radius, "#66A652"));
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

function catchBall() {
  for (let i = 0; i < rndArray.length; i++) {
    if (getDistance(blackBall, rndArray[i]) && i === order) {
      ballSequence();
      console.log("dupa");
      // console.log(order);
    }
  }
}

function ballSequence() {
  rndArray[order].color = "#66A652";
  order++;
  if (rndArray.length - 1 >= order) {
    rndArray[order].color = "red";
  }
}
