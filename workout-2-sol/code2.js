
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
    getData('https://192.168.12.155:8080/api/4/provision?access_token=79a47b89a4858f350d53527951831fa96a6363874bfb5933b23c6442'); 
    getData('https://192.168.12.155:8080/api/4/program?access_token=79a47b89a4858f350d53527951831fa96a6363874bfb5933b23c6442');
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
        for (j = 0; j < o.programs[i].wateringTimes.length; j++){
            if (o.programs[i].wateringTimes[j].active === true){
                var sec = o.programs[i].wateringTimes[j].duration;
                var m = Math.floor(sec / 60);
                var s = sec % m;
                elemZones.innerHTML += o.programs[i].wateringTimes[j].name + "   " + "duration:" + " " + m +" "+ ":" + " " + s + "<br>";
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