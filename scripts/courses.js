

const append = (data, parent)=>{
    
    parent.innerHTML = null;

    data.forEach((el) => {
        // console.log('el:', el)

        let innerDiv = document.createElement('div');

        let title = document.createElement('h1');
        title.innerText = el.title;

        let btn1 = document.createElement('button');
        btn1.innerText = "Watch Free Preview";
        btn1.id = "btn1";


        let btn2 = document.createElement('button');
        btn2.innerText = "Get Full Access";
        btn2.id = "btn2";
        




        innerDiv.append(title,btn1,btn2);

        parent.append(innerDiv);
        
    })
}

export default append;