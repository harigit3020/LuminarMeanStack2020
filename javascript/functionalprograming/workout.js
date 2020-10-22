var sinp="HHHHPPSSDAAA";
var out="";
var obj={};
var s=sinp.split("")
// for(char of sinp){
//     arsinp.push(char);
// }
// console.log("Input :"+sinp);
// var sout=[];
// for( char1 of arsinp){
//     var cnt=0;
//     for(char2 of arsinp){
//         if(char1==char2){
//             cnt+=1;     
//         }
//     }
//    sout.push(cnt+char1);
//    for(i=1;i<cnt;i++){
//    arsinp.shift()
//    }    
// }
// console.log("Output :"+ sout);
 for( char of s){
    if(char in obj){
        obj[char]+=1;
    }
    else{
        obj[char]=1;
    }
  
 }
 for ( elm in obj){
    out+=obj[elm]+elm;
}

console.log(out);