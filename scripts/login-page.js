import login from "../components/login.js";
import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

let login_container = document.querySelector(".login-container");
login_container.innerHTML = login();

document.querySelector(".header").innerHTML = navbar();

document.querySelector("#footer").innerHTML = footer();

const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

let login_form = document.querySelector("#login-form");

const loginUser = (event) => {
  event.preventDefault();
  let login_data = JSON.parse(localStorage.getItem("login_data")) || [];

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  //   if
  let success = false;
  let logged_user = null;
  for (let i = 0; i < login_data.length; i++) {
    let el = login_data[i];
    if (el.email === email && el.password == password) {
      success = true;
      logged_user = el;
      break;
    }
  }
  let alert_box = document.querySelector(".alert-msg");
  if (success) {
    localStorage.setItem("logged_user", JSON.stringify(logged_user));
  } else {
    alert_box.innerText = "That wasn't correct. Try again?";
    alert_box.classList.add("active-alert");
  }
};

login_form.addEventListener("submit", loginUser);
