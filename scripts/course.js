import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import courses from "../components/courses.js";

document.querySelector(".header").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

// Click Event on Hamburger Icon
const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

const logout = () => {
  window.location.href = "index.html";
  localStorage.removeItem("logged_user");
};
// For logout
let logout_btn = document.getElementById("logout");
if (logout_btn) {
  logout_btn.addEventListener("click", logout);
}

let main_container = document.querySelector(".full-container");
main_container.innerHTML = courses();

const getElem = (tag_name, class_name) => {
  let tag = document.createElement(tag_name);
  tag.className = class_name;
  return tag;
};

let all_course_conatiner = document.querySelector(".all-courses");
let all_courses = JSON.parse(localStorage.getItem("all_courses")) || [];
const appendCourses = (data) => {
  all_course_conatiner.innerHTML = null;
  data.map((el) => {
    let media_item = getElem("div", "media-item");

    let inner = getElem("div", "inner");

    let bg_img = getElem("div", "bg-img");

    let bg = getElem("img", "");
    bg.src = el.bg;

    bg_img.append(bg);

    let detail_box = getElem("div", "details-box");

    let details = getElem("div", "details");

    let title = getElem("h2", "");
    title.innerText = el.title;

    let instructor = getElem("div", "instructor");

    let i_left = getElem("div", "i-left");

    let profile = getElem("img", "");
    profile.src = el.profile;
    i_left.append(profile);

    let i_right = getElem("div", "i-right");

    let name = getElem("p", "name");
    name.innerText = el.name;
    let org = getElem("p", "org");
    org.innerText = el.org;
    i_right.append(name, org);

    instructor.append(i_left, i_right);

    let desc = getElem("div", "desc");
    let description = getElem("p", "");
    description.innerText = el.desc;
    desc.append(description);

    let duration = getElem("div", "duration");

    let time = getElem("p", "");
    time.innerHTML = `${el.time} <span>CC</span>`;

    duration.append(time);

    desc.append(description);
    details.append(title, instructor, desc, duration);

    let options = getElem("div", "options");

    let free_btn = getElem("button", "free");
    free_btn.innerText = "Watch Free Preview";

    let full_access_btn = getElem("button", "full-access");
    full_access_btn.innerText = "Get Full Access";

    options.append(free_btn, full_access_btn);

    detail_box.append(details, options);

    inner.append(bg_img, detail_box);
    media_item.append(inner);
    all_course_conatiner.append(media_item);
  });
};

// appendCourses(all_courses);
let compactBtn = document.querySelector(".compact");
let expandBtn = document.querySelector(".expand");

const compactList = () => {
  expandBtn.classList.remove("active");
  compactBtn.classList.add("active");
  all_course_conatiner.classList.add("list-data");
};

const expandList = () => {
  expandBtn.classList.add("active");
  compactBtn.classList.remove("active");
  all_course_conatiner.classList.remove("list-data");
};

compactBtn.addEventListener("click", compactList);
expandBtn.addEventListener("click", expandList);

let search_input = document.getElementById("search");

search_input.addEventListener("input", () => {
  //   console.log(search_input.value);
  let input = search_input.value;
  if (input == "") {
    appendCourses(all_courses);
    return;
  }
  let filterData = all_courses.filter((el) => {
    return el.title.toLowerCase().includes(input.toLowerCase());
  });
  //   console.log(filterData);
  appendCourses(filterData);
});
