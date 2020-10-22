class Bank{

    static getAccountDetails(){

        let data={ 
            sreedevi:{username:"sreedevi",password:"abc123",acno:1001,balance:50000},
            test1:{username:"test1",password:"test1",acno:1002,balance:5000},
            test2:{username:"test2",password:"test2",acno:1003,balance:6000},
            test3:{username:"test3",password:"test3",acno:1004,balance:7000},      

        }
        return data;
    }

   static login(){
            let usname=document.querySelector("#uname").value;//abc
            let pwd=document.querySelector("#pwd").value;
            //chk username is present inside data
            let data=Bank.getAccountDetails()
            if(usname in data){//abc in data
                let password=data[usname]["password"];
                if(pwd==password){
                    swal("login sucess!", "u provided valid data!", "success");
                     setTimeout(()=> window.location.href="usernav.htm",1000);//Delay calling
                }
                else{
                    swal("login failed!", "u provided invalid data!", "error");
      
                }     
            }
            else{
                alert("inavlid user")
        }

    }
    static deposit(){
        let acntno=(Number(document.querySelector("#acctno").value));
        let uname=document.querySelector("#uname").value;
        let amt=(Number(document.querySelector("#amt").value));
        let data=Bank.getAccountDetails();
        if(uname in data){
            let accntno=data[uname]["acno"];
            if(acntno==accntno){
                 data[uname]["balance"]+=amt;
                // alert("Your current balnce is "+ data[uname]["balance"]);
                swal("Deposit Successfull!",amt+" Rs credited", "success");
                btag.textContent="Available balance is :"+data[uname]["balance"]+"Rs"
            }else{
                swal("Account not exist!", "u provided invalid data!", "error");
            }
        }
        else{
            swal("Deposit failed!", "u provided invalid data!", "error");
        }
    }
    static withraw(){
        let ano=(Number(document.querySelector("#ano").value));
        let name=document.querySelector("#name").value;
        let ant=(Number(document.querySelector("#ant").value));
        let data=Bank.getAccountDetails();
        if(name in data){
            let accntno=data[name]["acno"];
            if(ano==accntno){
                if(ant>data[name]["balance"]){
                    swal("Withdraw failed!", "Insuccifficent balance", "error");
                }else{
                 data[name]["balance"]-=ant;
                // alert("Your current balnce is "+ data[name]["balance"]);
                swal("Withrawel Successfull!",ant+" Rs debited", "success");
                btag.textContent="Available balance is :"+data[name]["balance"]+"Rs";
                }
            }else{
                swal("Account not exist!", "u provided invalid data!", "error");
            }
        }
        else{
            swal("Withdraw failed!", "u provided invalid data!", "error");
        }
    }


}











//             let password = data[usname]["password"];
//             if (pwd == password) {
//                 swal("Good job!", "LOGIN", "success");

//             } 
//             else {
//                 alert("WRONG PASS");

//             }
//         }
//         else {
//            alert("INVALID");

//         }
//     }
// }