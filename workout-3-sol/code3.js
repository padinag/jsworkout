var map;
function myMap() {
   map = new google.maps.Map(document.getElementByID('map'),{
       center: {lat: 47.1585, lng: 27.6014},
       zoom: 8
   }
    );
}
window.onload = myMap();