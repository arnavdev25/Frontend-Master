import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import forgot from "../components/forgot-password.js";

document.querySelector(".header").innerHTML = navbar();

document.querySelector("#footer").innerHTML = footer();

let forgot_password_container = document.querySelector(
  ".forgot-password-container"
);
forgot_password_container.innerHTML = forgot();

let forgot_password_form = document.querySelector("#forgot-pass");
let data = [
  {
    name: "Aniket",
    email: "aniket@gmail.com",
    password: "test",
  },
  {
    name: "Miles",
    email: "aniket0123@gmail.com",
    password: "test",
  },
  {
    name: "Haresh",
    email: "haresh2910@gmail.com",
    password: "test",
  },
  {
    name: "Krunal",
    email: "krunal3103@gmail.com",
    password: "test",
  },
];
const resetPassword = () => {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let new_pass = document.querySelector("#new-pass").value;
  let success = false;
  for (let i = 0; i < data.length; i++) {
    let el = data[i];
    if (el.email === email) {
      el.password = new_pass;
      success = true;
      break;
    }
  }
  let alert_box = document.querySelector(".alert-msg");
  if (success) {
    // localStorage.setItem("logged_user", JSON.stringify(logged_user));
    console.log(data);
  } else {
    alert_box.innerText = "Email doesn't Exist in our database. Try again";
    alert_box.classList.add("active-alert");
  }
};

forgot_password_form.addEventListener("submit", resetPassword);
