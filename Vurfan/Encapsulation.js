class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getMarks() {
    return this.marks;
  }
  setMarks(marks) {
    this.marks = marks;
  }
}
let student = new Student("Vurfan", 90);
student.setName("Syed");
student.setMarks(85);
console.log(
  student.getName() + " " + "obtained total marks of" + " " + student.getMarks()
);
console.log(student);
