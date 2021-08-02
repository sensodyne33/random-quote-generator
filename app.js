//link the variables from html to js
let quote = document.getElementById("quote");
let quoteBtn = document.getElementById("quote-btn");

//create an array with quotes

let arrQuotes = [
    "Beauty is in the eye of the beholder",
    "The way I see it, if you want rainbow, you gotta put up with the rain",
    "Act as if what you do makes a difference. IT DOES",
    "You do not find the happy life. You make it."
]


//create event listerner for quote button
//create the function to do something
quoteBtn.addEventListener("click", function() {
    //create a random Index generator
    let randomIndex = Math.floor(Math.random() * arrQuotes.length);
        //once we click on button we need to generate a random quote
        //by passing in the arr with random index
        let randomQuotes = arrQuotes[randomIndex];
        //display result in web page
        quote.innerText = randomQuotes;

})