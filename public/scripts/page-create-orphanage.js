//create map
const map = L.map('mapid').setView([-22.9181815,-47.0741569], 13);
//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create icon
const icon = L.icon({
iconUrl: "/imagens/map-marker.svg",
iconSize:[58.68],
iconAnchor:[29,68],

})


let marker;

//create and add marker//
map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name=lat]') .value = lat;
    document.querySelector('[name=lng]') .value = lng;

    //remove icon//
    marker && map.removeLayer(marker);

    //ADD ICON LAYER//
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//Adding photo field

function addPhotoField(){
    //grab the photo container #Images
    const container =document.querySelector('#images')
    //grab container to duplicater ..new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // clone the last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //check if the field is empty if yes then do not add it to the container
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }


    //clearing the field
   input.value =""

    // add the clone to the image container #images
    container.appendChild(newFieldContainer)

}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
   
    if(fieldsContainer.length <= 1){
        //clear the field
        span.parentNode.children[0].value = ""
        return
    }

    //delete field
    span.parentNode.remove();
}


//Yes and no option select
function toggleSelect(event){

    //remove the active class from the buttons
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))
    
    //adding the active class on the clicked button
    const button = event.currentTarget
    button.classList.add('active')
    //update the input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

   

    
   
}

function validate(event){
    //validar se lat e lng estão preenchidos!!!!!!!!!!
    const location = true;
    if( location)
    event.preventDefault()
    alert('Selecione uma localização no mapa!')
}


