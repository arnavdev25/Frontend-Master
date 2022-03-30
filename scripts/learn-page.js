import { pathContainer, appedData } from "../components/path.js";
import navbar from "../components/navbar.js";
let header = document.querySelector(".header");
header.innerHTML = navbar();

let map_svg = localStorage.getItem("map_svg");
let topic_icon = localStorage.getItem("topic_icon");
let path_conatiner = document.querySelector(".path-container");
let elective_conatiner = document.querySelector(".elective-container");
path_conatiner.innerHTML = pathContainer(
  map_svg,
  "Learning Paths",
  "Guided paths to expand your abilities as a well-rounded engineer!"
);
elective_conatiner.innerHTML = pathContainer(
  topic_icon,
  "Topic Paths:",
  "Focus on a specific area in web development."
);

let learn_data = JSON.parse(localStorage.getItem("learn_data"));
let path_bottom = document.querySelector(".path-container > .p-bottom");

appedData(learn_data, path_bottom);
let elective_bottom = document.querySelector(".elective-container > .p-bottom");
let elective_data = JSON.parse(localStorage.getItem("elective_data"));
appedData(elective_data, elective_bottom);

// console.log(elective_bottom);

const updateProgress = (item) => {
  let counter = 0;
  let numb = item.querySelector(".numb>p");
  let id = setInterval(() => {
    if (counter == 100) {
      let right_div = item.querySelector(".bar.right");
      right_div.classList.add("reverse");
      let left_div = item.querySelector(".bar.left");
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
};

const p_box = document.querySelectorAll(".p-box");
p_box.forEach((el) => {
  updateProgress(el);
});
