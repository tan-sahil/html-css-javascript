
const div = document.querySelector('.main-div');
const p = document.createElement('p');
p.textContent = "Hey i'm red!";
p.style.color ="red";
div.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm Blue h3" ;
h3.style.color = "blue";
div.appendChild(h3);
const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border: black solid 1px; background: pink;');
div.appendChild(newDiv);
const h1 = document.createElement('h1');
const newP = document.createElement('p');
h1.textContent = "I'm in a div";
newP.textContent = "I'm in div too";
newDiv.appendChild(h1);
newDiv.appendChild(newP);