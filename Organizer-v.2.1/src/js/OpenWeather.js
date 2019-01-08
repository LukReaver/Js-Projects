import { updateMarker } from "./lafletMap";
import debounce from "lodash.debounce";

export { weatherFetch, weatherSet };

const apiKey = "886705b4c1182eb1c69f28eb8c520e20";

const $weatherTemp = document.getElementById("weatherTemp");
const $weatherIcon = document.getElementById("weatherIcon");
const $weatherDescription = document.getElementById("weatherDescription");
const $weatherCity = document.getElementById("weatherCity");
const $statPresure = document.getElementById("statPresure");
const $statWind = document.getElementById("statWind");
const $statHumidity = document.getElementById("statHumidity");
const $statClouds = document.getElementById("statClouds");
const $statTempMax = document.getElementById("statTempMax");
const $statTempMin = document.getElementById("statTempMin");
const $weatherInput = document.getElementById("weatherInput");
let mymap = document.getElementById("mapid");

const inputSearch = debounce(function() {
  const city = $weatherInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

  weatherFetch(url)
    .then(res => {
      weatherSet(res);
      updateMarker(res);
    })
    // catch all errors
    .catch(err => console.warn(err));
}, 1000);

// ----- Add event listener ---------
$weatherInput.addEventListener("input", inputSearch);
$weatherInput.addEventListener("keydown", e => {
  $weatherInput.classList.remove("weather__search--inputAlert");
  if (e.keyCode == 13 || e.which == 13) {
    e.preventDefault();
  }
});

async function weatherFetch(cords) {
  //cords =  object with lat,lon or url(city)
  let url = cords;

  if (typeof cords === "object") {
    const { lat, lon } = cords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`;
  }

  try {
    const data = await fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.cod === 200) {
          return res;
        } else {
          console.warn(res.message);
          $weatherInput.classList.add("weather__search--inputAlert");
          return;
        }
      });
    return data;
  } catch (err) {
    // console.warn(err);
  }
}

async function weatherSet(data) {
  try {
    $weatherTemp.textContent = data.main.temp.toFixed(1) + "°C";
    $weatherCity.textContent = data.name;
    var iconUrl = `https://openweathermap.org/img/w/${
      data.weather[0].icon
    }.png`;
    $weatherIcon.setAttribute("src", iconUrl);
    $weatherDescription.textContent = data.weather[0].description;
    $statPresure.textContent = data.main.pdatasure;
    $statWind.textContent = data.wind.speed;
    $statHumidity.textContent = data.main.humidity;
    $statClouds.textContent = data.clouds.all;
    $statTempMax.textContent = data.main.temp_max;
    $statTempMin.textContent = data.main.temp_min;
  } catch (err) {
    // console.warn(err);
  }
}
