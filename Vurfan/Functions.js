//!========================Function Declaration=====================//
// function add(a, b) {
//   return a + b; // Statement
// }
// console.log(add(4, 6));
// console.log(add(7, 5));
// // !========================Function Expression======================//
// let person = function (name, age) {
//   return [name, age];
// };
// console.log(person("Vurfan", 24));
//!=======================IIFE======================================
// (function (a, b) {
//   console.log(a + b);
// })(4, 6);
//?====================================================================
// function person(name, age) {
//   return [name, age];
// }
// console.log(person(["Vurfan"], { age: 24 }));
//!==========================Default Parameters=========================
// function add(a, b = 10) {
//   return a + b;
// }
// let x = add(4);
// console.log(x);
//!=========Passing new value to the default parameter
// let y = add(4, 4);
// console.log(y);
//?Another example
// let Name = "Vurfan";
// let Age = 24;
// let Company = "Delloite";
// let x = function (name = Name, age = Age, comp = Company) {
//   return [name, age, comp];
// };
// let y = x();
// console.log(y);
//?============Before default parameter=================
// let z = x("Theo", 24, "KPMG");
// console.log(z);

//?Another example
// let Username = "Vurfan";
// let Age = 24;
// let Company = "Deloitte";
// let Salary = "secret";
// let designation = "Full Stack Developer";
// let x = function (
//   name = Username,
//   age = Age,
//   comp = Company,
//   sal = Salary,
//   desi = designation
// ) {
//   return { name, age, comp, sal, desi };
// };
// console.log("DEFAULT PARAMETER");
// let y = x();
// console.log(y);
// let z = x("Krishna", 23, "TCS", 240000, "Any Developer");
// console.log("After Giving New Parameter");
// console.log(z);

//!==========Argument Object==================
// function person() {
//   return arguments;
// }
// let x = ["vurfan", "syed", "hussainy"];
// console.log(x);
// ! Access Argument object by array method
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);
//?Another example
// function peronalDetails() {
//   return arguments;
// }
// let x = ["Syed", "Vurfan", "Hussainy"];
// console.log(x);
// //Accessing Argument object by array method
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);

//!Rest parameter
// function normal(...rest) {
//   return rest;
// }
// let x = normal("syed", "vurfan", "hussainy");
// console.log(x);
//!Rest Parameter using arrow function
// let arrow = (...rest) => {
//   return rest;
// };
// let y = arrow("syed", "vurfan", "hussainy");
// console.log(y);

//!========Implicit Return======
// let x = (a, b) => a + b;
// console.log(x(6, 4));

//!Construtor Function

// function employee(name, age, salary) {
//   return { name, age, salary };
// }
// let x = new employee("vurfan", 25, 35000);
// let y = new employee("syed", 24, 40000);
// console.log(x, y);
//!Implicit return with object;
// let arrowfunction = (name, age, salary) => ({ name, age, salary });
// console.log(arrowfunction("Vurfan", 24, 35000));
//!Implicit return with array;
// let array = (name, age, salary) => [name, age, salary];
// console.log(array("Syed", 24, 35000));
//!Using normal function and rest parameter in same function
// let x = function (a, b, ...c) {
//   return [a, b, c];
// };
// let y = x("Syed", "vurfan", 24, 30, "hussainy");
// console.log(y);
//!Callback function
// let Js10AM = function () {
//   console.log(
//     "I am starting javascript class after java has been completed......."
//   );
// }; //

// let Java8AM = function () {};
// Java8AM(Js10AM());
// //?Another example
// let My_Details = function () {
//   console.log("Hi everyone this is SyedVurfanHussainy");
// };
// let my_details = function () {};
// my_details(My_Details());
// //?Another example
// let Addition = function (a, b) {
//   return a + b;
// };
// let multiply = function (a, b) {
//   return a * b;
// };
// let calculation = function (a, b, c) {
//   return b(a, c);
// };
// console.log(calculation(5, Addition, 6));
// console.log(calculation(7, multiply, 8));
//!Closures
// function outerFunction() {
//   let a = "vurfan";
//   function innerfunction() {
//     console.log(a);
//   }
//   return innerfunction();
// }
// outerFunction();

// let x = ["vurfan", "Theo"];
// for (let i = 0; i <= x.length -1; i++) {
//   console.log(x[i]);
// }

// let x = ["vurfan", "syed", "hussainy"];
// for (let y of x) {
//   console.log(y);
// }

// let x = ["js"];
// let y = ["java"];
// let z = ["python"];
// let CombineArraysUsingSpread = [...x, ...y, ...z];
// console.log(CombineArraysUsingSpread);

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// for (i = 7; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

let languages = ["java", "js", "php", "sql"];
let i = 0;
let lang = languages.length;
while (i <= lang -1) {
  console.log(languages[i]);
  i++;
}
