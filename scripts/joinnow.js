
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
