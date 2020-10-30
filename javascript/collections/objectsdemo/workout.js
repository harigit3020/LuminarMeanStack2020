var data="hai hai hai hello hai hello hello by by by";
var words=data.split(" ");//Spliting data using space
// console.log(words);
console.log(words)
var obj={}
for(word of words){
    if(word in obj){
        obj[word]+=1
    }else{
        obj[word]=1;
    }
}
console.log(obj);      
var large;
for(key1 in obj){
 for(key2 in obj){
     if(obj[key1]>obj[key2]){
          large=key1;
     }
 }
}console.log("'"+large+"'"+" has highest occurence");
//Can be solved with array //push object value into array.