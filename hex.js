const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color1 = document.querySelector(".color");

btn.addEventListener("click",()=>{
let hexColor = '#' ;
console.log()
for (i=0;i<6;i++)
{
   hexColor +=hex[generatenumber()] ;
}
document.body.style.backgroundColor=hexColor ;
color1.textContent=hexColor ;

});

function generatenumber()
{
    return Math.floor(Math.random()*hex.length) ;
}