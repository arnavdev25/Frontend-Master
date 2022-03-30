import navbar from "../components/navbar.js";
let header = document.querySelector(".header");
header.innerHTML = navbar();
const numb = document.querySelector(".numb");
let counter = 0;
let id = setInterval(() => {
  if (counter == 100) {
    let right_div = document.querySelector(".bar.right");
    right_div.classList.add("reverse");
    let left_div = document.querySelector(".bar.left");
    left_div.classList.add("reverse-left");
    let innerId = setInterval(() => {
      if (counter == 0) {
        clearInterval(innerId);
      } else {
        counter -= 1;

        numb.textContent = counter + "%";
      }
    }, 20);
    clearInterval(id);
  } else {
    counter += 1;
    numb.textContent = counter + "%";
  }
}, 20);
