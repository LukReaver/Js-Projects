'use strict';

//--- Global --
let ctx;
let face;
let pipe;
let animID;
let canvas;
let audio;
let score = 0;
let gameAnimation = false;
let gameAnimationEnd = false;

let firstPipe = true;
let tab = [];
let faceSize = 50;
let facePosX;
let facePosY;

//------------------- Main function ------------------
let main = function () {
    prepearDomElement();
    init()
    prepereEventHandler();
}
//----------------- Prepere function ------------------
let prepearDomElement = function () {
    canvas = document.getElementById('canvas');
}
//---------------------- Init ----------------------
function init() {
    facePosX = canvas.width * 2 / 10;
    facePosY = 300 - faceSize * 1 / 2;

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 600;

        audio = new Audio();
        audio.src = "sounds/bgSound.mp3";
        audio.volume = 0.008;

        face = new Face(facePosX, facePosY, faceSize, faceSize, 'image/faceUpA.png');
        pipe = new Pipe();

        //--init-draw----
        animate();
    } else {
        alert("Sry your browser don`t support canvas");
    }
}
//----------------- Prepere function ------------------
let prepereEventHandler = function () {
    window.addEventListener("keypress", jump);
    window.addEventListener("keypress", gameStart);
}

//----------------- animate ------------------
function animate() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    face.colision(tab, gameEnd);
    face.faceChange();
    face.gravity();
    face.draw();
    face.scores(tab);
    pipe.pipesDraw();
    pipe.update2(tab);
    face.scores(face, tab);

    ctx.fill = '#ccc';
    ctx.font = '2rem arial';
    ctx.fillStyle = 'red';
    ctx.fillText('Score: ' + score, 10, 20);

    if (gameAnimation) {
        animID = requestAnimationFrame(animate);
    } else {
        if (!gameAnimationEnd) {
            banerStart()
        }
    }
}
// //------------------- event handlers ------------------
function jump(evt) {
    face.jump(evt);
}

function banerStart() {

    ctx.beginPath();
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, 210, 300, 150);
    ctx.font = '2rem arial';
    ctx.fillStyle = '#ccc';
    ctx.fillText('Start ?', 120, 250);
    ctx.fillText('Press space to Jump/Start', 30, 290);
}

function gameStart() {
    if (!gameAnimation) {
        gameAnimation = true;
        //---reset-value-----     
        score = 0;
        firstPipe = true;
        // firstPress = false;
        tab = [];
        face.x = canvas.width * 2 / 10;
        face.y = 300 - faceSize * 1 / 2;
        //----------    
        animate();
        audio.play();
    }

}

function gameEnd(evt) {
    //--delay-for-last-frame----
    setTimeout(function () {
        ctx.beginPath();
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(0, 210, 300, 150);

        ctx.font = '2rem arial';
        ctx.fillStyle = '#ccc';
        ctx.fillText('End ', 125, 250);
        ctx.fillText('You score: ' + score, 95, 290);
        ctx.fillText('Restart ?', 110, 330);
    }, 50)

    audio.pause();
    gameAnimation = false;
    gameAnimationEnd = true;
    console.log('endGame')

}

document.addEventListener('DOMContentLoaded', main);