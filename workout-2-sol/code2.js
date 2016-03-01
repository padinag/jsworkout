
function getData(url) {
    
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
          //console.log('Status:', this.status);
          //console.log('Headers:', this.getAllResponseHeaders());
          //console.log('Body:', this.responseText);
          parseResponse(this.responseText);    
      }
    }
    request.send();   
}

function getAllData() {
    getData('https://private-anon-2ee957f6e-rainmachine.apiary-mock.com/api/4/provision'); 
    getData('https://private-anon-2ee957f6e-rainmachine.apiary-mock.com/api/4/program');
}

function parseResponse(t) {
    var o = JSON.parse(t);
    console.log(o);
    
    if (o.hasOwnProperty("location") && o.hasOwnProperty("system")) {
        displayProvision(o);
    } else if (o.hasOwnProperty("programs")) {
        displayPrograms(o);
    } 
}  

function displayProvision(o) {
    var elemProvisions = document.getElementById('provision');
    elemProvisions.innerHTML = o.location.name + '<br>' + o.system.netName;
};

function displayPrograms(o) {
    var elemPrograms = document.getElementById('programs');
    elemPrograms.innerHTML = "";
    for (i = 0; i < o.programs.length; i++){
        elemPrograms.innerHTML += o.programs[i].name + "<br>";
        var elemZones = document.createElement("div");
        elemZones.innerHTML = "";
        for (j = 0; j < o.programs[i].wateringTimes.length; j++){
            if (o.programs[i].wateringTimes[j].active === true){
                var sec = o.programs[i].wateringTimes[j].duration;
                var m = Math.floor(sec / 60);
                var s = sec % m;
                elemZones.innerHTML += o.programs[i].wateringTimes[j].name + "   " + "duration:" + " " + m +" "+ ":" + " " + s + "<br>";
            } else{
                j += 1
                }
            }
        elemPrograms.appendChild(elemZones);
    }
};


window.onload = function() { 
    var elemRefresh = document.getElementById('refresh');
    elemRefresh.onclick = function() { getAllData() };
    
    getAllData();
};