class Employee {
    constructor(name, age, gender, salary, date_of_join, address){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
        this.date_of_join = date_of_join;
        this.address = address;
    }
}

class Department extends Employee{
    constructor(name, age, gender, salary, date_of_join, address, dept){
        super(name, age, gender, salary, date_of_join, address);
        this.dept = dept;
    }
}


let e1 = new Department ('ABC', 25, 'M', 22000, '01/01/2022', 'HYD', 'IT');
console.log(e1);
module.exports = {
    pass: function(){
        return e1;
    }
}