// let first=document.getElementById("first")

// function myFunction(){
//     document.getElementById("first").style.backgroundColor="red";

// }
// function myFunction1(){

//     document.getElementById("sec").style.backgroundColor="red";

// }
// function myFunction2(){

//     document.getElementById("third").style.backgroundColor="red";

// }
// function myFunction3(){

//     document.getElementById("fourth").style.backgroundColor="red";

// }

let plan_boxes = document.querySelectorAll("#box>div");

plan_boxes.forEach((item) => {
  item.addEventListener("click", () => {
    colorChange(item);
  });
});

function colorChange(item) {
  plan_boxes.forEach((el) => {
    el.classList.remove("active");
  });
  item.classList.add("active");
}
