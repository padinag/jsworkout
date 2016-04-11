var map;
function myMap() {
   map = new google.maps.Map(document.getElementByID('map'),{
       center: {lat: 47.156, lng: 27.516},
       zoom: 8
   }
    );
}
window.onload = myMap();