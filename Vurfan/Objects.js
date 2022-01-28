//!=======================Objects================================
let Employee = {
  Emp_Name: "Vurfan",
  Emp_Gender: "Male",
  Emp_Company: "TCS",
  Emp_Id: 123,
  Emp_Designation: "Front_End_Developer",
  Emp_Location: "Bangalore",
  Emp_Salary: 25000,
  Emp_Skills: ["Web Technology, Javascript, ReactJs, MongoDb"],
};
console.log(Employee);
Employee.Emp_Skills.forEach((skills) => console.log(skills));

//!==============Inserting values inside empty object===============

let Details = {};
Details.Name = "Vurfan";
Details.Age = 24;
Details.Gender = "Male";
Details.Skills = ["Web Technology, Javascript, ReactJs, MongoDb"];
console.log(Details);

//!=================Creating an Object using Constructor===============

function Person(Username, Age, Gender, Skills) {
  this.Username = Username;
  this.Age = Age;
  this.Gender = Gender;
  this.Skills = Skills;
}
let details = new Person("Vurfan", 24, "Male", [
  "Web Technology, Javascript, ReactJs, MongoDb",
]);

let Details = new Person("Syed", 25, "Male", "MERN_STACK");
console.log(details);
console.log(Details);
