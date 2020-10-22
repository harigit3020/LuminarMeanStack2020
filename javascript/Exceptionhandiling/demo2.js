try{
    var data="10+2$5*8+2";
    var res=eval(data); //throws error
    console.log(res)
}
catch(err){
    // var data="10+20*8/2";
    console.log("exception")
}
//finally -> is block used to run a code wheather an exception occuer or not
finally{
    var num1=10,num2=20;
    var res=num1+num2;
    console.log(res)
}

