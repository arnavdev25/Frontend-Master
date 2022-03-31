let sub_box = document.querySelectorAll(".sub-box");

let data = [
  "Register for a Monthly Account",
  "Register for a Yearly Account",
  "Register for a Monthly Team Account",
  "Register for a Yearly Team Account",
];
const changePlan = (el, msg) => {
  sub_box.forEach((item) => {
    item.classList.remove("active");
  });
  el.classList.add("active");
  let title = document.querySelector(".plan");
  title.innerText = msg;
};

sub_box.forEach((item, index) => {
  item.addEventListener("click", () => {
    let msg = data[index];
    changePlan(item, msg);
  });
});

let form = document.querySelector("#register");

const storeData = () => {
  event.preventDefault();
  let login_data = JSON.parse(localStorage.getItem("login_data")) || [];
  let email = document.getElementById("email").value;
  let fn = document.getElementById("first_name").value;
  let ln = document.getElementById("last_name").value;
  let password = document.getElementById("password").value;
  let payment_type = document.getElementById("payment_option").value;
  let card_number = document.getElementById("card_number").value;
  let expiry = document.getElementById("expiry").value;
  let cvc = document.getElementById("cvc").value;

  let detail = {
    email,
    fn,
    ln,
    password,
    payment_type,
    card_number,
    expiry,
    cvc,
  };
  login_data.push(detail);
  localStorage.setItem("login_data", JSON.stringify(login_data));
  document.getElementById("email").value = "";
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("password").value = "";
  document.getElementById("password_again").value = "";
  document.getElementById("card_number").value = "";
  document.getElementById("expiry").value = "";
  document.getElementById("cvc").value = "";
  window.location.href = "Login.html";
};
form.addEventListener("submit", storeData);
