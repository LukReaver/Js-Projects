const canvas = document.getElementById("photo");
const range1 = document.getElementById("sd1");
const range2 = document.getElementById("sd2");
const range3 = document.getElementById("sd3");

sd1.addEventListener('input',()=>{
    console.log(sd1.value);
    invert(sd1.value)
})


let cv = canvas.getContext("2d");
canvas.width = canvas.clientWidth
// canvas.width = 1800;
canvas.height = canvas.clientHeight
// canvas.height = 700

console.dir();

function loadImage() {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image's `));
    });
    img.src = "b21.jpg";
  });
}

loadImage()
  .then(result => {
    console.log(canvas.width);
    return cv.drawImage(result, 0, 0, canvas.width, canvas.height);
  })
  .catch(err => console.error(err));

//--------------------------------------
let color = document.getElementById('colorPic');
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = cv.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';
  color.style.background =  rgba;
  color.textContent = rgba;
}
canvas.addEventListener('mousemove', pick);
//--------------------------------------
const invert = function(value) {

    for (let i = 0; i < data.length; i += 4) {
        data[i]     = 255 - data[i];     // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue
    }
    cv.putImageData(imageData, 0, 0);
};
//--------------------------------------

const grayscale = function() {
    for (let i = 0; i < data.length; i += 4) {
        let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    cv.putImageData(imageData, 0, 0);
};
//--------------------------------------