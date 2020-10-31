var tweet=["sachin tweet1","sehwag tweet1","kholi tweet1","sachin tweet2","kholi tweet2","sachin tweet3","kholi tweet3","kholi tweet4","sachin tweets4","kholi tweet5"];
var obj={};
var arr=[];
for(words of tweet){
    arr=words.split(" ");
    arr.pop();
    for(wrd of arr){
        if(wrd in obj){
            obj[wrd]+=1;
        }else{
            obj[wrd]=1;
        }
    }
}
var karr=Object.values(obj);
var lar=karr.reduce((i,j)=>i>j?i:j);
var srt=karr.sort((i,j)=>j-i);
for(key in obj){
    if(obj[key]==lar){
        console.log("More tweets by "+key);
        break;
    }
}
var obj2={};
for(val of srt){
    for(key in obj){
        if(obj[key]==val){
            obj2[key]=val; 
        }
    }
}
console.log("Tweets in sorted order: ");
console.log(obj2);
