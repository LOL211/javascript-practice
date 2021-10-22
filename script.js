

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
    return but;
}

show_input = document.createElement("h3");
show_input.classList.add("display-4");
maincontainer.appendChild(show_input);
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


