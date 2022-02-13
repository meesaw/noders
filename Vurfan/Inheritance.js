class Employee {
  constructor(name, age, gender, designation, location, skills) {
    this.emp_name = name;
    this.emp_age = age;
    this.emp_gender = gender;
    this.epm_designation = designation;
    this.emp_location = location;
    this.emp_skills = skills;
  }
}

class Person extends Employee {
  constructor(name, age, gender, designation, location, skills, com_name) {
    super(name, age, gender, designation, location, skills);
    this.comapany_name = com_name;
  }
}
let person_Details = new Person(
  "SdVurfanHussainy",
  24,
  "Male",
  "Front-End-Developer",
  "Bangalore",
  ["WebTechnology", "JavaScript", "reactJs", "MongoDb"],
  "Deloitte"
);
console.log(person_Details);


