//create map
const map = L.map('mapid').setView([-22.9181815,-47.0741569], 13);
//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create icon
const icon = L.icon({
iconUrl: "./public/imagens/map-marker.svg",
iconSize:[58.68],
iconAnchor:[29,68],
popupAnchor:[170,2]
})

//Create Pop Up Overlay
const popup = L.popup({
    closeButton:false,
    className:'map-popup',
    minWidth:240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/imagens/arrow-white.svg">')

L
    .marker([-22.9181815,-47.0741569], {icon})
    .addTo(map)
    .bindPopup(popup)
    