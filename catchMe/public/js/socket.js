import * as Config from "./config.js";
import { players,syncTab } from "../app.js";
import {  SetMarker } from "./mapGoG.js";
// console.log(players);
let tempTab ;
let dialBox = document.getElementById("posts");
let socket = io.connect("http://localhost:4000");


export function emitEvent(payload, type, playerID) {
  const messageObject = {
    gameId: Config.GAME_ID,
    playerId: playerID,
    // date: Date.now(),
    type,
    payload
};
socket.emit("Marker-Race", messageObject);
}

export function syncEvent(id) {
    console.log(" pingS ");
    socket.emit("sync-ping", { gameId: id });
}
socket.on("sync-ping", function(data) {
    // if (data.gameId === Config.GAME_ID) {
        console.log(" pingR ");
        setData(Config.GAME_ID,players);
    // }
});

//  function setData(id, tab) {
//     console.log("dataSend");
//     socket.emit("setData", { gameId: id, tab });
// }
// socket.on("setData", function(data) {
//     if (data.gameId === Config.GAME_ID) {
//                 console.log(" dataSSSet");
//                 // console.log(data.tab);
//                 // tempTab = data.tab
//                 syncTab(data.tab)
//   }
// });

// listener for events ---------------------------------------------------------------
socket.on("Marker-Race", function(data) {
  if (data.gameId === Config.GAME_ID) {
    console.log("Message received: ", data);

    const { playerId, date, type, payload } = data;

    switch (type) {
        case Config.PLAYER_MOVE:
        updatePlayerPosition(playerId, payload);
        break;
      case Config.PLAYER_MESSAGE:
      let post = `<li class="list-group-item">${playerId}: ${payload}</li>`;
        dialBox.innerHTML += post;
        break;
    }
}
});

function updatePlayerPosition(id,payload){
// -- payload wspolzedne --
console.log('update');
    let cos = players.find(item=>{
        if(item.userID === id){
            item.userPos = payload
            // item.marker.setMap(null);
            item.marker =  SetMarker(id,payload)
        }
    })

}