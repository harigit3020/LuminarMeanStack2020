//Value stored as key-value pair
 var student={rol:100,name:"hari",course:"mean"};
//  console.log(student);
 console.log(student["name"]);//or(student.name)  fetch data with key

 student["total"]=150; //adding new record
 console.log(student);


 console.log("gender"in student); //searching for a key
 console.log("name" in student);


 student["total"]+=25; //Updating record
 console.log(student)