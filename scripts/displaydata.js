import navbar from "../components/navbar.js";
import footer from "../components/footer.js";


// Header & Footer
let header = document.querySelector(".header");
let footer_container = document.querySelector("#footer");
header.innerHTML = navbar();
footer_container.innerHTML = footer();
document.querySelector("#footer").innerHTML = footer();

const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
const hamburger1  = document.querySelector(" #footer .menu");
const navMenu1 = document.querySelector("#footer .mobile");
hamburger1.addEventListener("click", function () {
  navMenu1.classList.toggle("active");
});
function getIt(tag,id){
    tag=document.createElement(tag);
    tag.classNmae=id;
    return tag;
}
let con1 = document.getElementById("con1")
let data = JSON.parse(localStorage.getItem("displaydata"))
data.map(function(el){
  let img = getIt("img","img")
  img.src=el.img
  let div = getIt("div","div")
  div.append(img)
  con1.append(div)
})