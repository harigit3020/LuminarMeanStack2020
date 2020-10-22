var lo=10;
var up=50;
for(i=10;i<=50;i++){
    for(j=2;j<=i;j++){
        if(i%j==0){
            break;
        }else if(i==j+1){
            console.log(i);
        }
    }
}