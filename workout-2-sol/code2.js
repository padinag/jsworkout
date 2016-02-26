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

function parseResponse(t) {
    var o = JSON.parse(t);
    console.log(o);
    
    if (o.hasOwnProperty("location") && o.hasOwnProperty("system")) {
        displayProvision(o);
    } else if (o.hasOwnProperty("programs")) {
        displayPrograms(o);
    } else {
        refreshData(o);
    }
}  

function displayProvision(o) {
    var elemProvisions = document.getElementById('provision');
    elemProvisions.innerHTML = o.location.name + '<br>' + o.system.netName;
};

function displayPrograms(o) {
    var elemPrograms = document.getElementById('programs');
    for (i = 0; i < o.programs.length; i++){
        elemPrograms.innerHTML += o.programs[i].name;
    }
};

function refreshData() {
    var elemRefresh = document.getElementById('refresh');
    elemRefresh.textContent = "Refresh";
    elemRefresh.onclick = function() {
       while(elemProvisions || elemPrograms){
           
       }
    };
}

window.onload = function() { 
    getData('https://private-anon-2ee957f6e-rainmachine.apiary-mock.com/api/4/provision'); 
    getData('https://private-anon-a14707c0a-rainmachine.apiary-mock.com/api/4/program');
};