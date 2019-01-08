let clrscreen = true;
let negativ = false;

const $calculator = document.getElementById("calculator");
let $display = document.getElementById("display");

$calculator.addEventListener("click", CalcSing);
// /* -------------- calc ----------------- */

export { CalcSing };

function CalcSing(evt) {
  if (evt.target.textContent == "C") {
    cleardisplay();
  } else if (evt.target.textContent == "=") {
    equal();
  } else if (evt.target.textContent == "+/-") {
    negative();
  } else {
    if (clrscreen === true) {
      $display.value = "";
      clrscreen = false;
    }
    let sing = evt.target.textContent;
    $display.value += sing;
  }
}
function cleardisplay() {
  clrscreen = true;
  $display.value = "0";
}
function equal(evt) {
  try {
    $display.value = eval($display.value);
  } catch (error) {
    console.error(error);
    $display.value = "Error";
    setTimeout(function() {
      $display.value = "0";
    }, 1000);
  }
}
function negative(evt) {
  //  evt.stopPropagation();
  if (negativ === true) {
    display.value = display.value.slice(1);
    negativ = false;
  } else {
    display.value = "-" + display.value;
    negativ = true;
  }
}
