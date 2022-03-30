

const append = (data, parent)=>{
    
    // parent.innerHTML = null;

    data.forEach((el) => {
        // console.log('el:', el);

        let mainClass = document.createElement("div");
        mainClass.className = "c";


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


        let btn2 = document.createElement('button');
        btn2.innerText = "Get Full Access";
        btn2.id = "btn2";


        let title = document.createElement("h2");
        title.innerText = el.title;
        title.className ="title";

        btnClass.append(btn1, btn2);


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

export default append;


