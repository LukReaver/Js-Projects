import "./styles/style.scss";
// import "./index.html";

import * as todoAll from "./js/todoList";
import { getJoke } from "./js/jokes";
import { clock_date } from "./js/clock_date";
import { getLocation } from "./js/location";
import { weatherFetch, weatherSet } from "./js/OpenWeather";
import { initmap } from "./js/lafletMap";
import { CalcSing } from "./js/calc";

("use strict");

/* --- main --- */
const main = () => {
  getLocation
    .then(res => {
      weatherFetch(res)
      .then(res => {
        weatherSet(res);
        initmap(res);
      });
    })
    .catch(err => console.warn(err));
  todoAll.getLocalStorageItem();
  getJoke();
  clock_date();
};

document.addEventListener("DOMContentLoaded", main);


if (module.hot) {
  module.hot.accept();
}
