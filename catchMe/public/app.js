import { styledMapType } from "./js/mapStyle.js";

let map, marker, infoWindow;
let position = { lat: -34.397, lng: 150.644 };
let step = 1;

window.addEventListener("keyup", function() {});

// -- main function --
function main() {
  geoLoc();
  initMap();
}
// init map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    keyboardShortcuts: false,
    disableDefaultUI: true,
    scrollwheel: false,
    zoom: 8,
    minZoom: 8
  });

  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  SetMarker();
}

function geoLoc() {
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(location) {
        // pos = {
        // console.log(pos)
        pos.lat = location.coords.latitude;
        pos.lng = location.coords.longitude;
        // };
        // console.log(pos)

        infoWindow.setPosition(position);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(position);
        SetMarker();
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function SetMarker() {
  //Remove previous Marker.
  if (marker != null) {
    marker.setMap(null);
  }
  //Set Marker on Map.
  var myLatlng = new google.maps.LatLng(pos.lat, pos.lng);
  marker = new google.maps.Marker({
    position: myLatlng,
    map: map
  });
}

function moveMarker(step) {
  //Remove previous Marker.
  if (marker != null) {
    marker.setMap(null);
  }
  //Set Marker on Map.
  var myLatlng = new google.maps.LatLng(pos.lat, pos.lng);
  marker = new google.maps.Marker({
    position: myLatlng,
    map: map
  });
}

// conection make
var socket = io.connect("http://localhost:4000");

//------

let dialBox = document.getElementById("posts");
let message = document.getElementById("message");
let sendBtn = document.getElementById("buttonMessage");

//-----

// emit events
sendBtn.addEventListener("click", function() {
  console.log("poszedlo");
  console.log(message.value);

  socket.emit("chat", {
    message: message.value
    // //   handle:handle.value,
  });
  message.value = "";
});

// listener for events
socket.on("chat", function(data) {
  //   dialBox.value = data.message;

  let post = `<li class="post">TY:${data.message}</li>`;
  dialBox.innerHTML += post;
});

document.addEventListener("DOMContentLoaded", main);
