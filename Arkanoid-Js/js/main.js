'use strict';

//--- Global --
let canvas;
let ctx;
let resizeTimer = undefined;
let gameAnimation = true;
// let gameAnimation = false;
//--- Board --
let boardXX;
let boardWidth = innerWidth * 1.5 / 10;
let boardSpeed = 35;
//--- Ball --
let ball;
let ballList = [];
let speed = 10;
let radius = 10;
//--- blocks --
let blockXX;
let blockList = [];
let blocksCol = 9;
let blocksRow = 6;


//------------------- Main function ------------------
let main = function () {
    prepearDomElement();
    init();
    prepereEventHandler();
    
}
//------------------- Prepere function ------------------
let prepearDomElement = function () {
    canvas = document.querySelector('canvas');
}
let prepereEventHandler = function () {
    window.addEventListener("keyup", boardStop);
    window.addEventListener("keydown", boardStart);
    window.addEventListener("resize", resize);
}

//------------------- init function ------------------
function init() {
    
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let blocks = new Block();
        // column,rows,heightRows,paddingTop
        blocks.blocksInit(blocksCol, blocksRow, 0.5 / 10, 1 / 10);
        // Xpos,Ypos,Radius,VectorX,VectorY,color;
        ball = new Circle(innerWidth * 5 / 10, innerHeight * 6 / 10, radius, 0, speed, '#BDD3DE');
        // Xpos,Ypos,Radius,Width,Height,border,color;
        boardXX = new Board(innerWidth * 5 / 10 - boardWidth * 1 / 2, innerHeight * 9.2 / 10, boardWidth, 20, 'black', '#105B63');
        
        alert('Start Play?')
        animate();
    } else {
        alert("Sry yours browser don`t support canvas")
    }
}
function resize(){   
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
        window.location.reload(true) ; 
    },200)

}
//------------------- end function ------------------
function endGame() {
    let cy = ball.posy;
    let cr = ball.radius;

    if (blockList.every(function (el) {
            return el == 'empty'
        })) {
        gameAnimation = false;
        alert("Win :)");
        window.location.reload(true)     
    } else if (cy + cr >= innerHeight) {
        gameAnimation = false;       
        alert("Lose :(");      
        window.location.reload(true)     

    }
}
//------------------- animate function ------------------
function animate() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ball.update();
    ball.draw();

    boardXX.checkCollision(ball);
    boardXX.draw();

    blockList.forEach(function (el) {
        el.checkCollision(ball);
        el.draw()
    })

    if (gameAnimation) {
        //  console.log(blockList)
        endGame();
        requestAnimationFrame(animate);
    }
}

//------------------- event handlers ------------------
let down = false;
let step;

function boardStart(evt) {
    let bx;
    let bxw;
    let key = evt.which || evt.keyCode || evt.charCode;

    if (key === 37) {

        if (down) return;
        down = true;
        step = setInterval(function () {
            bx = boardXX.blockX;
            if (bx > 0) {
                boardXX.move(-boardSpeed, bx, bxw);
            }
        }, 50);
    } else if (key === 39) {
        if (down) return;
        down = true;
        step = setInterval(function () {
            bxw = boardXX.blockX + boardXX.blockW;
            if (bxw < innerWidth) {
                boardXX.move(boardSpeed, bx, bxw);
            }
        }, 50);
    }
}

function boardStop(evt) {
    let key = evt.which;
    if (key === 37) {
        down = false;
        clearInterval(step);
    } else if (key === 39) {
        down = false;
        clearInterval(step);
    }
}

document.addEventListener('DOMContentLoaded', main);