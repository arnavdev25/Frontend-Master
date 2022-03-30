const pathContainer = (svg, title, msg) => {
  return `<div class="p-top">
        ${svg}
        <h1>${title}</h1>
        <h2>
          ${msg}
        </h2>
      </div>
      <div class="p-bottom">
      </div>
    `;
};

const getElem = (tag_name, class_name) => {
  let tag = document.createElement(tag_name);
  tag.className = class_name;
  return tag;
};

const appedData = (data, parent) => {
  parent.innerHTML = null;
  data.map((el) => {
    let p_box = getElem("div", "p-box");

    // Progress Bar
    let circular = getElem("div", "circular");

    let inner = getElem("div", "inner");

    let outer = getElem("div", "outer");

    let numb = getElem("div", `numb ${el.class}`);
    let numb_img_box = getElem("div", "img");
    if (el.img == "") {
      numb_img_box.innerHTML = el.icon;
    } else {
      let img = getElem("img", "");
      img.src = el.img;
      numb_img_box.append(img);
    }
    let p = getElem("p", "");
    p.innerHTML = "0%";
    numb.append(numb_img_box, p);

    let circle = getElem("div", "circle");
    let dot = getElem("div", "dot");
    let span = getElem("div", el.class);
    dot.append(span);

    let bar_left = getElem("div", "bar left");
    let left_progress = getElem("div", "progress");
    bar_left.append(left_progress);

    let bar_right = getElem("div", "bar right");
    let right_progress = getElem("div", "progress");
    bar_right.append(right_progress);

    let desc = getElem("div", "desc");

    let title = getElem("h3", "title");
    title.innerText = el.title;

    let description = getElem("p", "");
    description.innerText = el.desc;

    let btn = getElem("button", el.class);
    btn.innerText = "Start";

    circle.append(dot, bar_left, bar_right);
    circular.append(inner, outer, numb, circle);
    desc.append(title, description);

    p_box.append(circular, desc, btn);
    parent.append(p_box);
  });
};

export { pathContainer, appedData };
