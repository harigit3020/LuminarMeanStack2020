var data="ABABABAB";
var obj={}
for(char of data){
    if(char in obj)
    {
        console.log("first recursive character is "+char);
        break;
    }else{
        obj[char]=1
    }
}