class Parent{
    level1(){
        console.log("iam i  leve1");
    }
}
class Child extends Parent{
    level2(){
   console.log("iam in level2")
    }
}
class SubChild extends Child{
    level3(){
        console.log("iam in level3");
    }

}
var obj=new SubChild();
obj.level1();
obj.level2();
obj.level3();