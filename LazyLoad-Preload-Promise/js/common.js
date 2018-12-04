let $body2 = document.querySelectorAll('body img')

// ------ Distance from bottom ---------
let viewPortOffsetPercent = 30;

// -- Main --
preload()
// loadAll()

// -- Main --

// ---- add preloader ------
function preload() {
  $body2.forEach((el) => {    
    el.dataset.dtsrc = el.src;
    el.src = '';
    el.parentElement.classList.add('loading')
    // console.log('OK1')
  })
}
// ---- load async all -----
// function loadAll() {
//   $body2.forEach((el) => {
//     loadImage(el.dataset.dtsrc)
//       .then((img) => {
//         el.parentElement.classList.remove('loading')
//         el.src = img.src
//         console.log('OK3')
//       })
//   })
// }

// ------  load after photo is visible ------
document.addEventListener('scroll', () => {

  let inh = window.innerHeight - (window.innerHeight * (viewPortOffsetPercent / 100))

  $body2.forEach((el, key) => {
    if (el.y <= inh) {
      let inElem = $body2[key];
      if (inElem.getAttribute('src') === '') {
        loadImage(inElem.dataset.dtsrc)
          .then((img) => {
            inElem.parentElement.classList.remove('loading')
            inElem.src = img.src
            inElem.parentElement.classList.add('animclass')
            console.log(`ELEM== ${key}`)
          })
          .catch(err => console.log(err))
      }
    }
  })
})

// ----  return promise ------
function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', e => resolve(img));
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image's URL: ${url}`));
    });
    img.src = url;
  });
}