function prime(low,up){
    for(i=low;i<=up;i++){
        for(j=2;j<=i;j++){
            if(i%j==0){
                break;
            }else if(i==j+1){
                console.log(i);
            }
        }
    }
}
prime(50,100);