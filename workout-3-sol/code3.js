var map;
function myMap() {
    mapElem = document.getElementById('map');
    map = new google.maps.Map(mapElem, {
       center: {lat: 47.156, lng: 27.516},
       zoom: 8
    });
}

window.onload = myMap;

