let arr=[]
          
//    document.querySelector("#terms").addEventListener("click",submitfun)
  function submitfun(event){ 
    let Email= document.querySelector("#email").value
   let firstname= document.querySelector("#first_name").value
   let lastname= document.querySelector("#last_name").value
   let password= document.querySelector("#password").value
   let passagain= document.querySelector("#password_again").value
      event.preventDefault(event)
      console.log("hello",Email) 
      
      
      if(password==passagain){
          console.log(password,passagain)
          obj={
              Email:Email,
              firstname:firstname,
              lastname:lastname,
              password:password,
              passagain:passagain

          }
              arr.push(obj)
              localStorage.setItem("more",JSON.stringify(arr))
      }
      else{
          alert("please insert correct password")
          
          
      }
      if(arr.length>0){
        window.location.href=("https://frontendmasters.com/bootcamp/")
          }
      console.log(arr)
     
  }