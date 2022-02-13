class Employee 
{
    constructor (first_name, last_name, empid, addr, phno) 
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.empid = empid;
        this.addr = addr;
        this.phno = phno;
    }
    checkemp(empid)
    {
        if(empid>0)
        {
            console.log('IS A EMPLOYEE');
        }
        else
        {
            console.log('NOT A EMPLOYEE');
        }
    }
}
let abc = new Employee('John', 'Cena', 123, 'USA', 12345);
let def = new Employee('Vikas', 'Kumar', 0, 'IND', 67890);
console.log(abc);
console.log(def.checkemp());
