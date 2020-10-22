// var htags=document.getElementsByTagName("h1");
// for(ho of htags){
//     ho.style.color="red";
// }
// var htag=document.getElementById("one")
// htag.style.color="blue";
// var hclass=document.getElementsByClassName("two");
// for(hc of hclass){
//     hc.style.color="green"
// }

// var lst=document.querySelectorAll("li");
// //let-> can specify scope of variable
// for(let it of lst){
//     it.style.color="green"

// }
// var meth=document.querySelector("#meth")//fetching unique element
// meth.style.color="yellow"
// var lis=document.querySelectorAll(".lis")
// for(let li of lis){
//     li.style.color="cyan"
// }
var hone=document.querySelector("#one");
var data=hone.textContent
// alert(data)
hone.textContent="hello";
var lst=document.querySelectorAll(".lis");
for(let item of lst){
    item.textContent="items"
}
