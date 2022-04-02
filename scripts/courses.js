import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

// import { display } from "./scripts/popular.js"





document.querySelector(".header").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

// Click Event on Hamburger Icon
const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
const hamburger1  = document.querySelector(" #footer .menu");
const navMenu1 = document.querySelector("#footer .mobile");
hamburger1.addEventListener("click", function () {
  navMenu1.classList.toggle("active");
});



const append = (data, parent)=>{
    
    parent.innerHTML = null;

    data.forEach((el) => {
        // console.log('el:', el);
    

        let mainClass = document.createElement("div");
        mainClass.className = "mainClass";


        let outerDiv = document.createElement("div");
        outerDiv.id = "outer";

        let innerDiv = document.createElement("div");
        innerDiv.id = "inner";

        let btnClass = document.createElement("div")
        btnClass.className = "btnClass";

        let descriptionClass = document.createElement("div");
        descriptionClass.className = "descriptionClass";
       
        let img2 = document.createElement('img');
        img2.src = el.course_img_url;
        img2.id = "courses_img";


        let btn1 = document.createElement('button');
        btn1.innerText = "Watch Free Preview";
        btn1.id = "btn1";

        let link1 = document.createElement("a");
        link1.href = "https://frontendmasters.com/courses/angular-13/";

        link1.append(btn1);


        let btn2 = document.createElement('button');
        btn2.innerText = "Get Full Access";
        btn2.id = "btn2";
       
        let link2 = document.createElement('a');
        link2.href = "https://frontendmasters.com/join/ ";

        link2.append(btn2);


        let title = document.createElement("h2");
        title.innerText = el.title;
        title.className ="title";

        btnClass.append(link1, link2);


        let instructorClass = document.createElement("div");
        instructorClass.className = "instructorClass";
        

        let anchorClass = document.createElement("div");
        anchorClass.className="anchorClass"

        let instructor_img = document.createElement('img');
        instructor_img.src = el.instructor_img_url;
        instructor_img.className = "instructor_img";

        let instructorDetails = document.createElement("div");

        let instructorName = document.createElement("div");
        instructorName.innerText = el.instructorName;
        instructorName.className = "instructorName";


        let instructorOrg = document.createElement("div");
        instructorOrg.innerText = el.org;
        instructorOrg.className="instructorOrg";

        instructorDetails.append(instructorName,instructorOrg)
        
        anchorClass.append(instructor_img,instructorDetails)


        instructorClass.append(anchorClass);
        
        let descrClass = document.createElement("div");
        descrClass.className = "descrClass";

        let description = document.createElement("p");
        description.innerText = el.course_description;
        description.className="description"

        descrClass.append(description);
        
        let timeClass = document.createElement("div");
        timeClass.className = "timeClass";


        let time = document.createElement("div");
        time.innerText = el.time;
        time.className = "time";
        
        let caption = document.createElement("strong");
        caption.innerText = "CC";
        caption.className = "caption"
        
        time.append( caption)

        timeClass.append(time);
        
        
        descriptionClass.append(title,instructorClass,descrClass,timeClass);


        outerDiv.append(img2);
        innerDiv.append(descriptionClass,btnClass);


        mainClass.append(outerDiv,innerDiv);
        

        parent.append(mainClass);
        
    })
}

function search(data, inputValue, body) {

     let link1 = document.querySelectorAll(".popularmin");
    // link1.innerHTML = null;
  // link1.remove();     
    var searchText = inputValue.value.toLowerCase();
     let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `./styles/popular.css`;
    link.className = "popular";
    
   

    body.append(link);
    console.log("link:", link);
   
    console.log(searchText);
    var filterData = data.filter(function (item) {
      var elem = item.title.toLowerCase();
      return elem.includes(searchText);
    });
      console.log('filterData:', filterData)
      
    // append(filterData, main);
    if (searchText != "") {
  
      
    display(filterData,main);
      
    } else {
  // append(coursesData, main);
  append(data, main);
      

    }

  }


export { append, search };

// export default append;
  
  
  

function display(data,main){
    console.log(data)
main.innerHTML = null;

    data.map(function(el){
        let div = document.createElement("div");
        div.setAttribute("id","div")




        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id","mainDiv")

        let img = document.createElement("img")
      img.src = el.course_img_url;
        img.setAttribute("id","img")

        let img1 = document.createElement("img")
      img1.src = el.instructor_img_url;
        img1.setAttribute("id","img1")

        let title = document.createElement("h1")
      title.innerText = el.title;

        let titleDiv =document.createElement('div')
        titleDiv.id = "titleDiv"
        titleDiv.append(title)

        let nam = document.createElement("p");
      nam.innerText = el.instructorName;
        nam.id = "p"
        
        let nameDiv = document.createElement("div")
        nameDiv.setAttribute("id","nameDiv")
        
        let org = document.createElement("p");
      org.innerText = el.org;
        org.id = "p1"

        nameDiv.append(nam,org)

        let outerDiv = document.createElement("div")
        outerDiv.setAttribute("id","outerDiv")
        outerDiv.append(img1,nameDiv)
        outerDiv.style.display="flex"
    
        let description = document.createElement("p");
      description.innerText = el.course_description;
        description.setAttribute("id","description")
        description.setAttribute("id","desc")

        let descDiv =document.createElement('div')
         descDiv.id = "descDiv"
         descDiv.append(description)

        let time = document.createElement("p");
      time.innerText = el.time;
        time.setAttribute("id","time")

        let timeDiv =document.createElement('div')
        timeDiv.setAttribute("id","timeDiv")
        timeDiv.append(time)

        let CC = document.createElement("div")
        CC.innerText="CC"
        CC.setAttribute("id","CC")

        let outerDiv2= document.createElement("div")
        outerDiv2.append(timeDiv,CC)
        outerDiv2.setAttribute("id","outerDiv2")
        outerDiv2.style.display="flex"

        let btn = document.createElement("button")
        btn.innerText="Watch Free Preview"
        let btn1 = document.createElement("button")
        btn1.innerText="Get Full Access"
        btn.setAttribute("id","btn")
        btn1.setAttribute("id","btn1")
        let btnDiv = document.createElement("div")
        btnDiv.append(btn,btn1)
        btnDiv.style.display="flex"
        btnDiv.setAttribute("id","btnDiv")

       mainDiv.append(titleDiv,outerDiv,descDiv,outerDiv2,btnDiv)
       div.append(img,mainDiv)
       div.addEventListener("click",function(){
           window.location.href="display.html"
           let displayArr=[];
           displayArr.push(el)
       })
       btn1.addEventListener("click",function(){
           window.location.href="joinnow.html"
       })
        main.append(div)
    })
}

export  {display};






function minidisplay(data,main,body){
console.log('minidisplay:', minidisplay)
  main.innerHTML = null;
  

  data.map(function (el) {
     
        let div = document.createElement("div");
        div.setAttribute("id","div")




        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id","mainDiv")

        let img = document.createElement("img")
      img.src = el.instructor_img_url;
        img.setAttribute("id","img")

       
        let title = document.createElement("h1")
      title.innerText = el.title;

        let titleDiv =document.createElement('div')
      titleDiv.id = "titleDiv";
        titleDiv.append(title)

        let nam = document.createElement("p");
      nam.innerText = el.instructorName;
        nam.id = "p"
        
        let nameDiv = document.createElement("div")
        nameDiv.setAttribute("id","nameDiv")
        
      

        nameDiv.append(title,nam)

      

      mainDiv.append(img, nameDiv)
      
      div.append(mainDiv);
      //  div.addEventListener("click",function(){
      //      window.location.href="display.html"
      //      let displayArr=[];
      //      displayArr.push(el)
      //  })
     
      main.append(div);


      
    })
}

export  {minidisplay};





