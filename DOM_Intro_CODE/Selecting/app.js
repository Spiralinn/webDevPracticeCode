const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const squareImages = document.getElementsByClassName("square");

//Most common today querySelector and querySelectorAll
for (let img of squareImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const links = document.querySelectorAll("p a");

for (let link of links) {
  console.log(link.href);
}

const logThis = document.querySelector("p").innerText;
console.log(logThis);

document.querySelector("h1").innerText =
  "<i>This just changes the text/display</i>";

document.querySelector("h1").innerHTML =
  "<i>This adds elements inside the HTML</i>";
