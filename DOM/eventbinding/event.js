var one=document.querySelector("#one")
one.addEventListener("click",()=>{
    one.textContent="am clicked";
    one.style.color="red"

})
var two=document.querySelector("#two")
two.addEventListener("dblclick",()=>{
    two.textContent="clicked";
    two.style.color="green";
   
})
 var three=document.querySelector("#three")
 three.addEventListener("mouseover",()=>{
     three.style.color="blue";
     three.textContent="mouse currently over"
 })
 three.addEventListener("mouseout",()=>{
     three.style.color="yellow"
     three.textContent="mouse currently not over"
 })
 //addEventListener()-> has two argument 1.event name 2.handling function name
