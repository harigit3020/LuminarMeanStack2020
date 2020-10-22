class Add{
    constructor(){
        console.log("no arg");
    }
    constructor(num){
        console.log(10+num);
    }
}
var ob=new Add(10);
//In js constructor overloading can not be done.// A class may only have one constuctor.