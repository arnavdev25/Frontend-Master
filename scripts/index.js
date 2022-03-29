import { slider } from "../components/slider.js";
import { appendTwitterData } from "../components/slides.js";
let slider_con = document.querySelector(".slider-container");
slider_con.innerHTML = slider();

let twitter_data = JSON.parse(localStorage.getItem("twitter_data"));
let mid_data = JSON.parse(localStorage.getItem("t_mid_data"));
let small_data = JSON.parse(localStorage.getItem("t_small_data"));
appendTwitterData(twitter_data);

let slides = [...document.querySelectorAll(".slide")];
let i = 0;

let mleft = 0;
const prevItem = () => {
  if (i - 1 < 0) {
    // i = slides.length;
    for (let k = 0; k < slides.length - 1; k++) {
      nextItem();
    }
    return;
  }
  mleft = 0;
  slides[i - 1].style.marginLeft = mleft + "px";
  i--;
};

const nextItem = () => {
  if (i == slides.length - 1) {
    for (let k = 0; k < slides.length - 1; k++) {
      prevItem();
    }
    return;
  }
  mleft = -1176;
  i++;
  slides[i - 1].style.marginLeft = mleft + "px";
};

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
