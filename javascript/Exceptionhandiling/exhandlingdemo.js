//Exception is an abnormal code
//try catch finally throw



// try{
//     doubtfull code
// }
// catch(){
//     handling code
// }
var num1=10;
var num2=0
try{
    if(num2==0) throw "division by zero"; //coustomized exception 
    var res=num1/num2;
    console.log(res);
}
catch(err){
    console.log(err)
}
//throw-> throw is used to create coustomized errors