

const append = (data, parent)=>{
    
    parent.innerHTML = null;

    data.forEach((el) => {
        // console.log('el:', el)

        let mainDiv = document.createElement('div');
        mainDiv.id = "mainDiv";

        let innerDiv = document.createElement('div');
        innerDiv.id = "innerDiv";
        let outerDiv = document.createElement('div');
        outerDiv.id = "outerDiv";

        let img1 = document.createElement('img');
        img1.src = el.instructor_img_url;
        img1.id = "instructor_img";

        let img2 = document.createElement('img');
        img2.src = el.course_img_url;
        img2.id = "courses_img";


        let name = document.createElement('p');
        name.innerText = el.instructorName;

        

        let title = document.createElement('h1');
        title.innerText = el.title;


        let description = document.createElement('p');
        description.innerText = el.course_description;

        let btn1 = document.createElement('button');
        btn1.innerText = "Watch Free Preview";
        btn1.id = "btn1";


        let btn2 = document.createElement('button');
        btn2.innerText = "Get Full Access";
        btn2.id = "btn2";
        



        outerDiv.append(title,img1,name,description,btn1,btn2)

        innerDiv.append(img2);

        mainDiv.append(innerDiv,outerDiv)

        parent.append(mainDiv);
        
    })
}

export default append;


