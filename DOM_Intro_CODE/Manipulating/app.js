const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "Orange";
  link.style.textDecorationStyle = "dotted";
}

//const h1 = document.querySelector("h1");
//console.log(h1);

//window.getComputedStyle(h1);

// const container = document.querySelector('#container');
// const img = document.querySelector('img');

// container.style.textAlign = 'center';

// img.style.width = '150px'
// img.style.borderRadius = '50%'

/////////////////////

const h2 = document.querySelector("h2");

//h2.classList
h2.classList.add("purple");
h2.classList.add("border");

h2.classList.remove("border");
h2.classList.contains("border"); //Boolean
h2.classList.toggle("purple"); //On-Off-On-Off

const newH3 = document.createElement("h3");
newH3.innerText = "I am new";
document.body.appendChild(newH3);

const p = document.querySelector("p");
p.append("I am new yaaaaaayyy!!!");

const newB = document.createElement("b");
newB.append("Hi! im bold and nr.1");

p.prepend(newB);

// const newH2 = document.createElement("h2");
// newH2.append("Are adorable");
// const currentH1 = document.querySelector("h1");
// currentH1.insertAdjacentElement("afterend", newH2);
// currentH1.after("I am here now");
