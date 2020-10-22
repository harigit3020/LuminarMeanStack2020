class Bank {
    static Bname(){
        var bankname="sbi";
        console.log(bankname);
    }
    constructor(pname, accno, balance) {
        this.person_name = pname;
        this.account_number = accno;
        this.bank_balance = balance;
       // this.bnk_name = bankname;
    }
    deposit(amount) {
        this.bank_balance += amount;
        console.log("your " + Bank.bankname + " account credited with " + amount + "avl.balance " + this.bank_balance);
        
    }
    
    withraw(amount) {
        if (amount > this.bank_balance) {
            console.log("Insufficient balance");
        } else {
            this.bank_balance -= amount;
            console.log("your "+Bank.Bname() + " account debited with " + amount + "avl.balance " + this.bank_balance);
        }
    }
    balanceEnqiry() {
        console.log("Current balance is " + this.bank_balance)
    }

}
var obj=new Bank("Amal",1234567,5000,"SBI");
//obj.createAccount("Amal",1234567,5000,"SBI");
//obj.withraw(6000);
obj.deposit(3000);
obj.balanceEnqiry();
obj.withraw(7000);
//Bank.bankname;
//Type of variables
//Local variables->function arguments variables
//Instance variables -> In class instance variables can be access using this keyword
//->In out side class instance can be access using reference name. eg: obj.person_name
//Static variable-> Can be access with class name.

//Type of methods
//Instance methods
//Static methods-> Can be access with class name.