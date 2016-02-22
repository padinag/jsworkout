
var request = new XMLHttpRequest();
request.open('GET', 'https://private-anon-2ee957f6e-rainmachine.apiary-mock.com/api/4/provision');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
      var elem = document.getElementById('responses');
      elem.textContent = this.responseText;
  }
};

request.send();

