In a document (provided index.html) create a series of cards ([example](http://www.google.ro/design/spec/components/cards.html#)) that are 
automatically generated from an array of objects in the form:

	{
	 title: "Example",
	 description: "A Description",
	 url: "http://google.com"
	}

Each element in the array has an object with above format. Each generated card has the title set to title key from object, 
a middle part containing description from description key in object and a button that once pressed opens the url in a new 
tab or window. A sample array is provided in data.js file.

You must write the code in code.js which will contain a function what will be executed on document load event and create
the cards as child elements of the div with id: content from index.html.

Things to google for:

- window.onload
- getElementById
- createElement
- appendChild







