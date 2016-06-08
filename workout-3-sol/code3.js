var map;
function myMap() {
    mapElem = document.getElementById('map');
    map = new google.maps.Map(mapElem, {
       center: {lat: 47.156, lng: 27.516},
       zoom: 8
    });
}
window.onload = myMap;


function newCoord() {
    var longElem = document.getElementById('longitude').value;
    var latElem = document.getElementById('latitude').value;
    moremap = new google.maps.Map(document.getElementById('map'),{
        center: {lat: latElem, lng: longElem},
        zoom: 8
    });
}

newMap = function(){
    var elemSubmit = document.getElementById('submit');
    elemSubmit.onclick = newCoord();     
    newCoord();

}


