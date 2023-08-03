
//DOM manipulation

const title = document.querySelector("#main-heading")
// to change color we need variable on which styles are being applied ..

title.style.color = "red"; // inline styling methode in js and will not work on multiple classes eg list-item class

const list = document.querySelectorAll(".list-items");

// since we will have an array of list so inline method will not work here so by form loop be will do so.

for (i = 0; i< list.length; i++){
    list[i].style.color = "yellow";
}

// creating elements.. ie adding something to our html .. 

const ul = document.querySelector("ul");  // accesing first yl tag by querySelector
const li = document.createElement("li"); // <li> element is created

// attaching it with document i.e ul list. in html

ul.append(li);

// now adding some text into li elment we just crested..

li.innerText = "Inception";  
// now setting attibutes of it 

li.setAttribute("class","list-items" );
// adding it element 

const adding = document.querySelector("ul");
const li1 = document.createElement("li");

adding.append(li1);

li1.innerText= "Wolf Of Wall Street" ;

//adding attributes.
li1.setAttribute("class", "list-items");
li1.style.color = "red";

// using get attributes .. we have main id as "main-heading" of h1 tag..

const attr = document.querySelector("#main-heading");

console.log(attr.getAttribute("id"));
attr1 = document.querySelector(".list-items");
console.log(attr1.getAttribute("class"));

// creating new element.. 
const item = document.createElement("li");
ul.append(item);
item.innerText = "Bahuballi";

// to add class by classList property insted of setAttributes;

item.classList.add("list-items");
console.log(item.classList.contains('list-items'));

// to remove an element..
item.remove();

// adding events.
const btn = document.querySelector(".but");
function btnDo() {
    alert('Welcome man this journey is gonna be Fun')
}
btn.addEventListener("click" , btnDo);
