 
const append = (data, parent)=>{
    
    parent.innerHTML = null;

    data.forEach((el) => {
        

        let mainDiv = document.createElement('div');
        mainDiv.id = "mainDiv";

        let innerDiv = document.createElement('div');
        innerDiv.id = "innerDiv";

        let titleDiv =document.createElement('div')
         titleDiv.id = "titleDiv"

         let imgDiv =document.createElement('div')
         imgDiv.id = "imgDiv"

         let nameDiv =document.createElement('div')
         nameDiv.id = "nameDiv"

         let descDiv =document.createElement('div')
         descDiv.id = "descDiv"

         let btnDiv =document.createElement('div')
         btnDiv.id = "btnDiv"

         let flexDiv = document.createElement('div')
         flexDiv.id = "flexDiv"


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

        let org = document.createElement('p');
        org.innerText = el.org;
        org.id = "org"

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
        

        titleDiv.append(title)
        imgDiv.append(img1)
        nameDiv.append(name,org)
        descDiv.append(description)
        btnDiv.append(btn1,btn2)

        flexDiv.append(imgDiv,nameDiv)

        outerDiv.append(titleDiv,flexDiv,descDiv,btnDiv)

    
        innerDiv.append(img2);

    
        mainDiv.append(innerDiv,outerDiv)

        parent.append(mainDiv);
        
    })
}

export default append;

