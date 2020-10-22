
// var nums= Number(document.querySelectorAll("#nums").value)
// nums.addEventListener("click",()=>{
//     var bar=document.querySelector("#num");
//     bar.textContent=nums;
// })
var num=document.querySelector("#num");
function display(num){
    txt.value+=num;
}
clrscr=()=>{
    txt.value=" ";

}
calc=()=>{
    var data=eval(txt.value);
    txt.value=data;
    
}
