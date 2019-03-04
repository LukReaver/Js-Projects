'use strict'

window.addEventListener('keypress', playSS)
// document.querySelector('.container').addEventListener('click', playCC)
document.querySelector('#play').addEventListener('click', playAudio)
document.querySelector('#rec1').addEventListener('click', recAudio)
document.querySelector('#rec2').addEventListener('click', recAudio2)

let channel1 = [];
let channel2 = [];
// let cos;


const sounds = {
    113: 'boom',
    119: 'clap',
    101: 'hihat',
    97: 'kick',
    115: 'openhat',
    100: 'ride',
    122: 'snare',
    120: 'tink',
    99: 'tom'
}

// function playSound(e) {
//     document.body.innerHTML += e.charCode + '<br>';
// }

let Chn1reC = false;
let Chn2reC = false;
let recStart = 0;
let timepause = 0;
let beginRec = true;
let loop = false;
// function playCC(e) {    
// console.log(e.target.firstElementChild.play())
// }

function playSS(e) {
    // e.target.backgroundColor = 'green';
    // console.log(e.charCode)
    if (!sounds[e.charCode])
        return;
    // 
    // let cos = channel1.pop()
    //pobierac czas ostatniego elementuz tablicy albo 0
    // if (beginRec) {
    //     recStart = Date.now();
    //     beginRec = !beginRec;
    // }
    // console.log(channel1.pop().time)

    const soundName = sounds[e.charCode];
    const audioDom = document.querySelector(`#${soundName}`)
    audioDom.parentElement.classList.add('press')
    setTimeout(() => {
    }, 500)
    
    audioDom.setAttribute('loop', '');
    loop = !loop
    if (!loop) {
        audioDom.removeAttribute('loop');
        audioDom.parentElement.classList.remove('press')
    }
    // console.log(audioDom)
    
    audioDom.currentTime = 0;
    audioDom.play();

    if (Chn1reC) {

        channel1.push({
            name: soundName,
            time: Date.now() - recStart
        })
        console.log(Date.now() - recStart)
        // console.log(Date.now())
        // console.log(recStart)      
    }
    if (Chn2reC) {
        channel2.push({
            name: soundName,
            time: Date.now() - recStart
        })
        // console.log(Date.now() - recStart)
        // console.log(Date.now())
        // console.log(recStart)  
    }
}

function recAudio(e) {
    recStart = Date.now();
    // Chn2reC = !Chn2reC;
    // e.target.innerHTML = Chn2reC ? "Stop" : "Nagrywaj";
    Chn1reC = !Chn1reC;
    e.target.innerHTML = Chn1reC ? "Stop" : "Channel1";
}

function recAudio2(e) {
    recStart = Date.now();
    // Chn1reC = !Chn1reC;
    // e.target.innerHTML = Chn1reC ? "Stop" : "Nagrywaj";
    Chn2reC = !Chn2reC;
    e.target.innerHTML = Chn2reC ? "Stop" : "Channel2";
}

function playAudio(e) {
    Chn1reC = false;
    Chn2reC = false;
    // e.target.innerHTML = Chn1reC ? "Stop" : "Channel1";
    // e.target.innerHTML = Chn2reC ? "Stop" : "Channel1";
    channel1.forEach((el, key) => {
        setTimeout(() => {
            const audioDom = document.querySelector(`#${el.name}`);
            audioDom.currentTime = 0;
            audioDom.play();
        }, el.time)
    });
    channel2.forEach((el, key) => {
        setTimeout(() => {
            const audioDom = document.querySelector(`#${el.name}`);
            audioDom.currentTime = 0;
            audioDom.play();
        }, el.time)
    });
}