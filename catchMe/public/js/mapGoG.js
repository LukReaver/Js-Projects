import { styledMapType } from "./mapStyle.js";

let map, marker, infoWindow;

export function initMap(cords) {
    // console.log(cords);
    let lat = parseFloat(cords.lat || cords.latitude);
    let lon = parseFloat(cords.lon || cords.longitude);
    let position = new google.maps.LatLng(lat, lon);

    map = new google.maps.Map(document.getElementById("map"), {
      center: position,
      keyboardShortcuts: false,
      disableDefaultUI: true,
      scrollwheel: false,
      zoom: 5,
      // minZoom: 8
      // map.setCenter(posLL)
    });
    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");

    map.setCenter(position)
    console.log('fuckYe22')
  }

 export function SetMarker(userId , cords) {
    let lat = parseFloat(cords.lat || cords.latitude);
    let lon = parseFloat(cords.lon || cords.longitude);
    // var iconBase = 'https://maps.google.com/mapfiles/kml/paddle/';
    console.log('fuckYe333')
    // //Remove previous Marker.
    if (marker != null) {
      marker.setMap(null);
    }
    //Set Marker on Map.
    let myLatlng = new google.maps.LatLng(lat, lon);
    map.setCenter(myLatlng)
   return marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      // icon: iconBase + '1.png'
      label: {
        fontWeight: 'bold',
        fontSize: '14px',
        text:`P${userId}`,
    }
    });
  }