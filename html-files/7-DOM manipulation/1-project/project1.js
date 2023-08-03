let quote = document.querySelector(".main-quote");
let person = document.querySelector(".person");
let btn = document.querySelector("#next")
const quotes = [
    { quote: "A rose by any other name would smell as sweet",
    person: "William Shakespeare"},
    {quote: "Ask not what your country can do for you; ask what you can do for your country.",
    person: "John Kennedy"},
    {quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas Edison"},
    {quote: "Life is like a box of chocolates. You never know what you’re gonna get.",
    person: "Forest Gump"}
]
btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText= quotes[random].person;
    console.log(quotes[1].quote);

})