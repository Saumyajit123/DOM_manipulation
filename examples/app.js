//console.log(document);

let container = document.querySelector(".container");

//console.log(container.h1);
let h1 = container.querySelector("h1");
console.log(h1);

h1.style.color = "red";
h1.classList.add('heading');

let h2 = document.createElement("h2");
h2.innerHTML = "I am learning JS";
h2.classList.add("heading2");

container.appendChild(h2);

let table = document.createElement("table");
container.appendChild(table);

let ul = document.createElement("ul");
table.appendChild(ul);

let li = document.createElement("li");
li.innerHTML = "Apple";

ul.appendChild(li);

