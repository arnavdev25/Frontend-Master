


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


let a=document.getElementById("erremail")
let b=document.getElementById("errfname")
let c=document.getElementById("errlname")
let d=document.getElementById("errpassword")
let e=document.getElementById("errpasswordagain")
let f=document.getElementById("errcardname")
let g=document.getElementById("errcheck")
  //console.log(signinArr);
function myFormSubmit(event){
      event.preventDefault(); 


  if
    (
      (document.getElementById("email").value=="")||
      (document.getElementById("first_name").value=="")||
      (document.getElementById("last_name").value=="")||
      (document.getElementById("password").value=="")||
      (document.getElementById("password_again").value=="")||
      (document.getElementById("placeholder").value=="")||
      (document.getElementById("card_num").value=="")
    )
    {
       a.innerText="Please enter a valid email."
       a.style.color="red";
       a.style.fontStyle="italic";
       a.style.fontSize="16px";

       b.innerText="Please enter your first name."
       b.style.color="red";
       b.style.fontStyle="italic";
       b.style.fontSize="16px";

       c.innerText="Please enter your last name."
       c.style.color="red";
       c.style.fontStyle="italic";
       c.style.fontSize="16px";

       d.innerText="Please enter correct password"
       d.style.color="red";
       d.style.fontStyle="italic";
       d.style.fontSize="16px";

       e.innerText="Please enter a matching password."
       e.style.color="red";
       e.style.fontStyle="italic";
       e.style.fontSize="16px";

       f.innerText="Your card number is incomplete."
       f.style.color="red";
       f.style.fontStyle="italic";
       f.style.fontSize="16px";

       g.innerText="Please check the box."
       g.style.color="red";
       g.style.fontStyle="italic";
       g.style.fontSize="16px";

    }


    else{

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
  
