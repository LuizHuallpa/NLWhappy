const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//create map
const map = L.map('mapid', options).setView([-22.9181815,-47.0741569], 13);
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



L
    .marker([-22.9181815,-47.0741569], {icon})
    .addTo(map)
    
    // Image Gallery

    function selectImage(event) {
        const button = event.currentTarget;
        //remover active 
const buttons = document.querySelectorAll(".images button");
buttons.forEach(removeActiveClass)

function removeActiveClass(button) {
    button.classList.remove("active");
}
        //selecionar a imagem cliclada
const image = button.children[0];
const imageContainer = document.querySelector(".orphanage-details > img");
        //atualizar o container principal
imageContainer.src= image.src;
        //adicionar a classe active para o botão 

        button.classList.add("active");
    }