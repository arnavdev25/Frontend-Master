import navbar from "../components/navbar.js";
import footer from "../components/footer.js";


document.querySelector(".header").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

// Click Event on Hamburger Icon
const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
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

  function search(data,inputValue) {
    var searchText = inputValue.value.toLowerCase();
    console.log(searchText);
    var filterData = data.filter(function (item) {
      var elem = item.title.toLowerCase();
      return elem.includes(searchText);
    });
      console.log('filterData:', filterData)
      
    append(filterData, main);
  }


export { append, search };

// export default append;





