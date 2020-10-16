//create map
const map = L.map('mapid').setView([-22.9181815,-47.0741569], 11);
//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create icon
const icon = L.icon({
iconUrl: "/imagens/map-marker.svg",
iconSize:[58.68],
iconAnchor:[29,68],
popupAnchor:[170,2]
})


function addMarker({id, name, lat, lng}){
//Create Pop Up Overlay
const popup = L.popup({
    closeButton:false,
    className:'map-popup',
    minWidth:240,
    minHeight:240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/imagens/arrow-white.svg"> </a>`)

L
    .marker([lat,lng], {icon})
    .addTo(map)
    .bindPopup(popup)
    

}


const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})