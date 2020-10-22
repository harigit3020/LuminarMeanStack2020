class Student {
    constructor(roll, name, course, total) {
        this.roll = roll;
        this.name = name;
        this.course = course;
        this.total = total;
    }
    getStudent = () => {
        console.log("Roll number: " + this.roll)
        console.log("Name: " + this.name)
        console.log("Course " + this.course)
        console.log("Total: " + this.total)
    }
}
// Object can be declare with  var,let,cont
var obj1 = new Student(100, "amal", "BCA", 130);
var obj2 = new Student(101, "hari", "Bsc", 400);
var obj3 = new Student(102, "manu", "BCA", 350);
var obj4 = new Student(103, "anand", "BCA", 134);
var obj5 = new Student(104, "jobin", "Bcom", 450);
var stu = [];
stu.push(obj1);
stu.push(obj2);
stu.push(obj3);
stu.push(obj4);
stu.push(obj5);
console.log("Students scores more than 135 marks: ")
// for (st of stu) {
//     if (st.total > 135) {
//         console.log(st.name + " " + st.roll);
//     }
// }
var stud=stu.filter(obj=>obj.total>135);
for(stun of stud){
    console.log(stun.name);
}
console.log("Students in BCA course: ")
// for (st of stu) {
//     if (st.course == "BCA") {
//         console.log(st.name);
//     }
// }
var sbca=stu.filter(obj=>obj.course=="BCA")
for(sb of sbca){
console.log(sb.name)
}
// var totals = 0;
// for (st of stu) {
//     if (st.course == "BCA") {
//         totals += st.total;
//     }
// }
// console.log("Total marks of students in BCA: " + totals);
var total=sbca.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2);//Map picks values of "total" from "sbca" array
console.log(total);
var topstu=stu.filter(obj=>obj.total==stu.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2));
console.log(topstu);
// for(inf of stu){
//     if(inf.total==hig){
//         console.log(inf)
//     }
// }
// var topstu=stu.filter(obj=>obj.total==hig);
// console.log(topstu);
var min=stu.map(obj=>obj.total).reduce((obj1,obj2)=>obj1<obj2?obj1:obj2);
console.log(min)
// for(inf of stu){
//     if(inf.total==min){
//         console.log(inf)
//     }
// }
var lowstu=stu.filter(obj=>obj.total==min);
console.log(lowstu);
//sort marks
var sortstu=stu.map(obj=>obj.total).sort((obj1,obj2)=>obj1-obj2);
console.log(sortstu);
var namea=stu.filter(obj=>obj.name.charAt(0)=="a");
console.log(namea);

