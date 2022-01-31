class Student {
  constructor() {
    let Name;
    let Marks;
  }
  getName() {
    return this.Name;
  }
  setName(Name) {
    this.Name = Name;
  }
  getMarks() {
    return this.Marks;
  }
  setMarks(Marks) {
    this.Marks = Marks;
  }
}
let student = new Student("Vurfan", 90);
student.setName("Syed");
student.setMarks(85);
console.log(
  student.getName() + " " + "obtained total marks of" + " " + student.getMarks()
);
console.log(student);
