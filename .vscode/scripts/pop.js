 
// const append = (data, parent)=>{
    
//     parent.innerHTML = null;

//     data.forEach((el) => {
        

//         let mainDiv = document.createElement('div');
//         mainDiv.id = "mainDiv";

//         // let innerDiv = document.createElement('div');
//         // innerDiv.id = "innerDiv";

//         let titleDiv =document.createElement('div')
//          titleDiv.id = "titleDiv"

//          let imgDiv =document.createElement('div')
//          imgDiv.id = "imgDiv"

//          let nameDiv =document.createElement('div')
//          nameDiv.id = "nameDiv"

//          let descDiv =document.createElement('div')
//          descDiv.id = "descDiv"

//          let btnDiv =document.createElement('div')
//          btnDiv.id = "btnDiv"

//          let flexDiv = document.createElement('div')
//          flexDiv.id = "flexDiv"


//         let outerDiv = document.createElement('div');
//         outerDiv.id = "outerDiv";

//         let img1 = document.createElement('img');
//         img1.src = el.instructor_img_url;
//         img1.id = "instructor_img";

//         let img2 = document.createElement('img');
//         img2.src = el.course_img_url;
//         img2.id = "courses_img";


//         let name = document.createElement('p');
//         name.innerText = el.instructorName;

//         let org = document.createElement('p');
//         org.innerText = el.org;
//         org.id = "org"

//         let title = document.createElement('h1');
//         title.innerText = el.title;


//         let description = document.createElement('p');
//         description.innerText = el.course_description;

//         let btn1 = document.createElement('button');
//         btn1.innerText = "Watch Free Preview";
//         btn1.id = "btn1";


//         let btn2 = document.createElement('button');
//         btn2.innerText = "Get Full Access";
//         btn2.id = "btn2";
        

//         titleDiv.append(title)
//         imgDiv.append(img1)
//         nameDiv.append(name,org)
//         descDiv.append(description)
//         btnDiv.append(btn1,btn2)

//         flexDiv.append(imgDiv,nameDiv)

//         outerDiv.append(titleDiv,flexDiv,descDiv,btnDiv)

    
//         // innerDiv.append(img2);

    
//         mainDiv.append(img2,outerDiv)

//         parent.append(mainDiv);
        
//     })
// }

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
        img.src=el.img
        img.setAttribute("id","img")

        let img1 = document.createElement("img")
        img1.src=el.photo
        img1.setAttribute("id","img1")

        let title = document.createElement("h1")
        title.innerText=el.name

        let titleDiv =document.createElement('div')
        titleDiv.id = "titleDiv"
        titleDiv.append(title)

        let nam = document.createElement("p");
        nam.innerText=el.title
        nam.id = "p"
        
        let nameDiv = document.createElement("div")
        nameDiv.setAttribute("id","nameDiv")
        
        let org = document.createElement("p");
        org.innerText=el.com
        org.id = "p1"

        nameDiv.append(nam,org)

        let outerDiv = document.createElement("div")
        outerDiv.setAttribute("id","outerDiv")
        outerDiv.append(img1,nameDiv)
        outerDiv.style.display="flex"
    
        let description = document.createElement("p");
        description.innerText=el.des
        description.setAttribute("id","description")
        description.setAttribute("id","desc")

        let descDiv =document.createElement('div')
         descDiv.id = "descDiv"
         descDiv.append(description)

        let time = document.createElement("p");
        time.innerText=el.time
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