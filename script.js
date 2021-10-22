
show_input = document.createElement("h3");
show_input.classList.add("display-4");
show_input.classList.add('justify-content-center');
show_result = document.createElement("h3");
show_result.classList.add("display-4");
show_result.classList.add('justify-content-center');

var state_43 = true;
var sum = 0;
var subjects = 0;
maincontainer = document.querySelector(".main");
const createrow= ()=>{

    let r = document.createElement("div");
r.classList.add("row");
r.classList.add("row-cols-3");
r.classList.add('justify-content-center');
return r;
}
const createcol= ()=>{

    let create = document.createElement("div");
    console.log(create)
    create.classList.add("col");
    create.classList.add('xs')
return create;
}

const create_but = () =>{
    let but = document.createElement("button")
    
    but.setAttribute("type", "button")
    but.classList.add("btn")
    but.classList.add("btn-outline-primary")

    but.addEventListener("click", (event)=>{
        console.log("here");
        console.log(but.innerHTML);
        show_input.innerHTML+=but.innerHTML+"  ";
        subjects+=1;
        show_result.innerHTML=calc_result(but.innerHTML);
    })
    return but;
}

const grade_val = (grade)=>{
let val = 0;
switch(grade.charAt(0)){

    case 'A':
        val=4;
        break;
    
    case 'B':
        val=3;
        break;
    
    case 'C':
        val=2;
        break;

    case 'D':
        val=1;
        break;
    
    case 'F':
        val=0;
        break;
    }
    if(grade.length==1)
        return val;
    else{
        if(val==4 && grade.charAt(1)=="+" && state_43)
            return 4.3;
        else if(val==4 && grade.charAt(1)=="+")
            return 4;
        else{
            switch(grade.charAt(1))
            {
                case '+':
                   return val+0.3;
                case '-':
                    return val-0.3;
            }
        }

    }
}













const calc_result = (grade)=>{
    sum+=grade_val(grade);

    

    return "GPA: "+(sum/subjects).toFixed(2);

}

maincontainer.appendChild(show_input);

maincontainer.appendChild(show_result);

for(let x = 0; x<4; x++)
{
    let letter = String.fromCharCode(65 + x)
    var row = createrow();
    
    console.log(row)
    for(let c = 0; c<3; c++)
    {
        var create=""
        var create = createcol();
        let tmp;
        switch(c){
            case 0:
            {
                tmp = letter+'+';

             break;

            } case 1:
            {
                tmp = letter;
             break; 

            }
             case 2:
            {
                tmp = letter+'-';
             break;   
            }
        }
       
        let but = create_but();
        but.innerHTML=tmp;
        create.appendChild(but);
        console.log(create, row)
        row.appendChild(create);
    }
    maincontainer.appendChild(row);

}

let r = createrow();

let col = createcol();
let but = create_but();
but.innerHTML="F"
col.appendChild(but)
r.appendChild(col)
maincontainer.appendChild(r)


