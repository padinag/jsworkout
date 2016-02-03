var content;

function createCards() {
    console.log("Function createCards executed");
    content = document.getElementById('content');
for (var i = 0; i < cardsData.length; i++){
        var singleCard = document.createElement('div');
            singleCard.className = "cardStyle";
        var titleElem = document.createElement('div');
            titleElem.textContent = cardsData[i].title;
            titleElem.className = "title" 
            //console.log(cardsData[i].title);
            //console.log(titleElem);    
        var descriptionElem = document.createElement('div');
            descriptionElem.textContent = cardsData[i].description;
            descriptionElem.className = "description";
            //console.log(cardsData[i].description);
            //console.log(descriptionElem);
        var linkElem = document.createElement('button');
        linkElem.textContent = "OPEN";
        linkElem.adinaCardDataIndex = i;
        
        linkElem.onclick = function() { 
            console.log(cardsData[this.adinaCardDataIndex].url);
            window.open(cardsData[this.adinaCardDataIndex].url); 
        } 
        
        singleCard.appendChild(titleElem);
        singleCard.appendChild(descriptionElem);
        singleCard.appendChild(linkElem);

        content.appendChild(singleCard);
    }   
}


window.onload = createCards;

