import axios from 'axios';
import "@babel/polyfill";

export const getLocation = new Promise((resolve, rejects) => {
  if (!navigator.geolocation) {
    console.warn(">Geolocation is not supported by your browser");
    return;
  }

  // static cordinates (Warszawa)
  const data = {
    lat: 52.2319,
    lon: 21.0067
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
  
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };
  //Wait for cords
  async function success(pos) {
    const crd = await pos.coords;
    data.lat = crd.latitude;
    data.lon = crd.longitude;
    resolve(data);
  }
  function error() {
    resolve(ipGeoLoc());
    // rejects();      
  }
});

async function ipGeoLoc(){
  let localIp = await axios.get( `https://api.ipify.org`).then(res=>res.data)
  let localCords = await axios.get( `http://ip-api.com/json/${localIp}`).then(res=>res.data)
  return localCords
}
