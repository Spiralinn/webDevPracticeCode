const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  //   const newColor = makeRandColor();
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  console.log(r + g + b);
  if (r + g + b < 200) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  h1.innerText = `rgb(${r}, ${g}, ${b})`;
});

// const makeRandColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// };
