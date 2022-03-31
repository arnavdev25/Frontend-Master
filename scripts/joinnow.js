


let box=document.getElementById("first")
box.classList.add("active")
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


document.querySelector("#form").addEventListener("submit",myFormSubmit);
  
var signinobj=JSON.parse(localStorage.getItem("registeredIds")) || [];
  //console.log(signinArr);
function myFormSubmit(event){
      event.preventDefault();  
      var signinobj=[{
          email:document.querySelector("#email").value,
          fname:document.querySelector("#first_name").value,
          lname:document.querySelector("#last_name").value,
          password:document.querySelector("#password").value,
          password_again:document.querySelector("#password_again").value,
          placeholder:document.querySelector("#placeholder").value,
          card_num:document.querySelector("#card_num").value,
      }];
      document.querySelector("#email").value="";
      document.querySelector("#first_name").value="";
      document.querySelector("#last_name").value="";
      document.querySelector("#password").value="";
      document.querySelector("#password_again").value="";
      document.querySelector("#placeholder").value="";
      document.querySelector("#card_num").value="";

     
      localStorage.setItem("registeredIds",JSON.stringify(signinobj));


    window.location.href="https://frontendmasters.com/"

  }

  document.querySelector("#first").addEventListener("click",changeCol)
  document.querySelector("#sec").addEventListener("click",changeCol1)
  document.querySelector("#third").addEventListener("click",changeCol2)
  document.querySelector("#fourth").addEventListener("click",changeCol3)
  
  function changeCol(){
    let text=document.querySelector("#title")
    text.innerHTML="Register for a Monthly Account"
  }
  function changeCol1(){
    let text=document.querySelector("#title")
    text.innerHTML="Register for a Yearly Account"
  }
  function changeCol2(){
    let text=document.querySelector("#title")
    text.innerHTML="Register for a Monthly Team Account"
  }
  function changeCol3(){
    let text=document.querySelector("#title")
    text.innerHTML="Register for a Yearly Team Account"
  }
  
