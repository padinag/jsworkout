function getData(url) {
    
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
          //console.log('Status:', this.status);
          //console.log('Headers:', this.getAllResponseHeaders());
          //console.log('Body:', this.responseText);
          getJSONobj(this.responseText);    
      }
    }
    request.send();    
}

function getJSONobj(t) {
    var elem = document.getElementById('responses');
    var o = JSON.parse(t);
    console.log(o);

    //elem.innerHTML += o.location.name + '<br>' + o.system.netName;

} 

function displayData(location){
    for (var name in location){
        console.log(location.name);
    }
}
window.onload = function() { 
    getData('https://private-anon-2ee957f6e-rainmachine.apiary-mock.com/api/4/provision'); 
    
}