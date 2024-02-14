     const form =document.querySelector("form");
     let input =document.querySelector(".input");
    const add =document.querySelector(".add");
    const List =document.querySelector(".List");
    
    form.onsubmit = function(e)
{
e.preventDefault();  
let el = e.target.elements;
//console.log(el);
const  data=el[0];
//console.log(data.value);
if(data.value.trim()==='')
{
    Swal.fire(
        {
        icon: "error" ,
        title: "Oops...",
        text: "Something wrong! Please check the entered input",
      });
    }
else
{  
List.innerHTML += `<li>${data.value} </li>` ;
data.value='';
}

}

