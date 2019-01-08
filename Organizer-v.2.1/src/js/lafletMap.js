
export {initmap,updateMarker }

let myMap = {};
let theMarker = {};
// L.marker.setLatLng(lat, lng);

const initmap = data => {  
  const { geoLocLat = data.coord.lat, geoLocLon = data.coord.lon } = data;
  
  myMap = L.map("mapid", {
    center: [geoLocLat, geoLocLon],
    zoom: 10
  });

  const copywrite =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
      maxZoom: 18,
      attribution: copywrite,
      id: "mapbox.streets"
    }
  ).addTo(myMap);

  theMarker = L.marker([geoLocLat, geoLocLon]).addTo(myMap);  
};

const updateMarker = data => { 
  const { geoLocLat = data.coord.lat, geoLocLon = data.coord.lon } = data;

  if (theMarker != undefined) {
    myMap.removeLayer(theMarker);
  }

  theMarker = L.marker([geoLocLat, geoLocLon]).addTo(myMap);
  myMap.setView([geoLocLat, geoLocLon],10)
};
