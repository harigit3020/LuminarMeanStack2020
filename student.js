class Student {
    static getDetails() {
        let data = {
            stu1: { name: "hari", course: "bca", reg: 3020, ph: 80, ch: 70, ma: 85 },
            stu2: { name: "amal", course: "ba", reg: 3030, ph: 70, ch: 60, ma: 80 },
            stu3: { name: "akhil", course: "bca", reg: 3010, ph: 85, ch: 72, ma: 65 },
            stu4: { name: "meena", course: "bcom", reg: 3040, ph: 60, ch: 60, ma: 55 },
            stu5: { name: "basil", course: "bsc", reg: 3060, ph: 50, ch: 40, ma: 75 },
        }
        return data;

    }
    static login() {
        let stname = document.querySelector("#sname").value;
        let regs = (Number(document.querySelector("#reg").value));
        let data = Student.getDetails()
        if (stname in data) {
            let reg = data[stname]["reg"];
            if (reg == regs) {
                alert("login success");
            } else {
                alert("invalid regno");
            }
        } else {
            alert("no student exist");
        }
    }

}


