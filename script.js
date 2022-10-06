
show_input = document.createElement("h3");
show_input.classList.add("display-4");
show_input.classList.add('justify-content-center');
show_input.innerHTML=' '
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
    create.classList.add("col");
    create.classList.add('xs')
return create;
}
const stack = []
const pop = () =>  { return stack.pop()};



const push = (item) =>  stack.push(item);

const create_but = (add=true) =>{
    let but = document.createElement("button")
    
    but.setAttribute("type", "button")
    but.classList.add("btn")
    but.classList.add("btn-outline-primary")
    if(add)
    {
        but.addEventListener("click", ()=>{
            // console.log("here");
            // console.log(but.innerHTML);
            show_input.innerHTML+=but.innerHTML+"  ";
            subjects+=1;
            push(grade_val(but.innerHTML));
            show_result.innerHTML=calc_result(but.innerHTML);
        })
    }
   
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
    
    //console.log(row)
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
       // console.log(create, row)
        row.appendChild(create);
    }
    maincontainer.appendChild(row);

}

let r = createrow();

let col = createcol();
let but = create_but();
but.innerHTML="F"
col.appendChild(but)
let col2 = createcol();
let but2 = create_but(false);
but2.innerHTML="Del"

but2.addEventListener("click", ()=>{


    if(subjects<=0) return;


subjects-=1;
remove = pop();
//console.log("remove is ",remove)
//console.log("sum was ", sum)
sum-=remove
//console.log("sum is ", sum)

var string = show_input.innerHTML;
//console.log("String is ",string, "length is ",string.length)
if(remove.toString().length==1)
{
 
   // console.log("length is 1 ",string.substring(0,string.length-3))
    show_input.innerHTML = string.substring(0,string.length-3)
    
}
else{

   // console.log("length is 2 ",string.substring(0,string.length-4))
    show_input.innerHTML = string.substring(0,string.length-4)

}
if(subjects!=0)
show_result.innerHTML="GPA: "+(sum/subjects).toFixed(2);
else
show_result.innerHTML=""

});
col2.appendChild(but2)



r.appendChild(col)
r.appendChild(col2)

maincontainer.appendChild(r)


