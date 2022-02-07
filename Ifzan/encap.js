class Employee 
{
    constructor (first_name, last_name, addr, phno) 
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.addr = addr;
        this.phno = phno;
        #empid = genEmp(first_name, last_name);
    }
    genEmp(first_name, last_name)
        {
            if( !first_name && !last_name )
            {
             let empid = Math.floor((Math.random() * 100) + 1);
             return #empid;
            }
            else
            {
                console.log('INSUFFICIENT DETAILS');
            }
        }
}
let abc = new Employee('John', 'Cena', 'USA', 12345);
let def = new Employee('Vikas', 'Kumar', 'IND', 67890);
console.log(abc);
console.log(def.genEmp());



