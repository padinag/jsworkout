
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
    getData('https://192.168.12.190:8080/api/4/provision?access_token=231f146743cc18062466752bdb6156fe673542def7e473fab385baa8'); 
    getData('https://192.168.12.190:8080/api/4/program?access_token=231f146743cc18062466752bdb6156fe673542def7e473fab385baa8');
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
    //var elemProvisions = document.getElementById('provision');
    //elemProvisions.innerHTML = o.location.name + '<br>' + o.system.netName;
    var elemAddress = document.getElementById('elemAddress')
    elemAddress.className = 'address'
    elemAddress.innerHTML = o.location.name;
    var elemDeviceName = document.getElementById('elemDeviceName');
    elemDeviceName.className = 'device';
    elemDeviceName.textContent = o.system.netName; 
};

function displayPrograms(o) {
    var elemPrograms = document.getElementById('programs');
    elemPrograms.innerHTML = "";
     for (i = 0; i < o.programs.length; i++){
        var programDiv = document.createElement('div')
        programDiv.innerHTML += o.programs[i].name + "<br>";
        programDiv.style.float = 'left';
        programDiv.className = 'programlist'
        var elemZones = document.createElement("div");
        elemZones.className = "zone"
        for (j = 0; j < o.programs[i].wateringTimes.length; j++){
            if (o.programs[i].wateringTimes[j].active === true){
                var sec = o.programs[i].wateringTimes[j].duration;
                var m = Math.floor(sec / 60);
                var s = sec % m;
                elemZones.innerHTML += o.programs[i].wateringTimes[j].name + "   " + "duration:" + " " + m +" "+ ":" + " " + s + "<br>";
                } 
            }
        elemPrograms.appendChild(programDiv);
        programDiv.appendChild(elemZones);
    }
}


window.onload = function () { 
    var elemRefresh = document.getElementById('refresh');
    elemRefresh.onclick = function() { getAllData() };
    
    getAllData();
};