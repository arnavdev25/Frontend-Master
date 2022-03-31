var icon1arr = [
    {
        img : "https://static.frontendmasters.com/assets/courses/2018-02-27-js-fundamentals-functional-v2/thumb.webp",
        name:"JavaScript: From Fundamentals to Functional JS, v2",
        photo:"https://static.frontendmasters.com/assets/teachers/gandolfo/thumb.webp",
        title:"Bianca Gandilfo",
        com:"Thumbtack",
        des:"Learn higher-order functions, closures, scope, master key functional methods like map, reduce and filter and promises and ES6+ asynchronous JavaScript.",
        time:"8 hours, 11 minutes ",
        head1:"Editor's Notes",
        de:"A practical introduction to JavaScript and an overview of the language, Bianca covers what you need to know to be competent at writing JavaScript."
      
   
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2020-01-07-javascript-hard-parts-v2/thumb.webp",
        name:"JavaScript: The Hard Parts, v2",
        photo:"https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.webp",
        title:"Will Sentance",
        com:"Codesmith",
        des:"Take your JavaScript to the next level. Gain an understanding of callbacks, higher order functions, closure, asynchronous and object-oriented JavaScript!",
        time:"6 hours, 41 minutes"
    },
   {
    img:"https://static.frontendmasters.com/assets/courses/2019-04-03-deep-javascript-v3/thumb.webp",
    name:"Deep JavaScript Foundations, v3",
    photo:"https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.webp",
    title:"Kyle Simpson",
    com:"You Don't Know JS",
    des:"Dive into JavaScript's core language features: types & coercion, scope & closure, and JavaScript's object oriented system.",
    time:"10 hours, 32 minutes "
   },
   {
       img:"https://static.frontendmasters.com/assets/courses/2019-04-05-js-recent-parts/thumb.webp",
       name:"JavaScript: The Recent Parts",
       photo:"https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.webp",
       title:"Kyle Simpson",
       com:"You Don't Know JS",
       des:"Get up to speed with new JavaScript features like tagged template literals, destructuring, iterators, generators, regex improvements and async await.",
       time:"4 hours, 9 minutes "
   },
   {
       img:"https://static.frontendmasters.com/assets/courses/2018-07-10-javascript-new-hard-parts/thumb.webp",
       name:"JavaScript: The New Hard Parts",
       photo:"https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.webp",
       title:"Will Sentance",
      com:"Codesmith",
      des:"Develop an intuitive understanding of the new features of JavaScript in ES6+: iterators, generators, promises, and async/await!",
      time:"4 hours, 46 minutes "
   },
   {
    img:"https://static.frontendmasters.com/assets/courses/2019-06-18-functional-javascript-v3/thumb.webp",
    name:"Functional-Light JavaScript, v3",
       photo:"https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.webp",
       title:"Kyle Simpson",
       com:"You Don't Know JS",
       des:"Improve your JavaScript by applying functional programming concepts like function purity, point-free, partial-application, currying, composition, immutability, recursion, list operations like map, reduce & filter...plus even more advanced concepts like monads and transduction!",
       time:"10 hours, 1 minutes"
   },
   {
       img:"https://static.frontendmasters.com/assets/courses/2020-03-17-hardcore-js-v2/thumb.webp",
       name:"Hardcore Functional Programming in JavaScript, v2",
       photo:"https://static.frontendmasters.com/assets/teachers/lonsdorf/thumb@2x.webp",
       title:"Brian Lonsdorf",
       com:"Salesforce",
       des:"Learn functional programming concepts such as pure functions, currying, composition, functors, and monads, and see functional concepts in action in a real-world web app!",
       time:"3 hours, 44 minutes"
   },
   {
       img:"https://static.frontendmasters.com/assets/courses/2019-08-28-javascript-accessibility/thumb.webp",
       name:"Accessibility in JavaScript Applications",
       photo:"https://static.frontendmasters.com/assets/teachers/sutton/thumb@2x.webp",
       title:"Marcy Sutton",
       com:"Gatsby",
       des:"Produce innovative and inclusive JavaScript-powered web apps! Learn to remove barriers and allow people with disabilities to use your modern JavaScript web applications.",
       time:"4 hours, 6 minutes "
   }
]

// background: #181818;
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon1arr,main)

import {  appedData, addEventToBox } from "../components/path.js";
import navbar  from "../components/navbar.js";
import footer from "../components/footer.js";

// Header & Footer
let header = document.querySelector(".header");
let footer_container = document.querySelector("#footer");
header.innerHTML = navbar();
footer_container.innerHTML = footer();
document.querySelector("#footer").innerHTML=footer()

const hamburger = document.querySelector(".menu");
  const navMenu = document.querySelector(".mobile");
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

var progress1 =[
  {
    class: "js",
color: "#c94f17",
desc: "From JavaScript foundations, all the way to Hardcore Functional JavaScript, find out how far you can go with your JavaScript abilities!",
icon: "",
img: " https://www.bing.com/th?id=OIP.fxMFAWgcs9ASnyZoIMeLJAHaHa&w=174&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.41&pid=3.1&rm=2",
title: "Write Professional, Modern JavaScript"

  }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
