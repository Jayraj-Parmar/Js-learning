// https://www.geeksforgeeks.org/javascript/javascript-inheritance/
class Company {
  constructor(company_name) {
    this.com_name = company_name;
  }

  company() {
    console.log(`${this.com_name} is a Company`);
  }
}

class Employee extends Company {
  constructor(com_name, name, pos) {
    super(com_name);
    this.name = name;
    this.pos = pos;
  }
  greet() {
    console.log(
      `Hello, I am ${this.name} and i am working as a ${this.pos} at ${this.com_name}`,
    );
  }
}

class Developer extends Employee {
  constructor(com_name, name, pos, tech) {
    super(com_name, name, pos);
    this.tech = tech;
  }
  codeIn() {
    console.log(`${this.name} is doing coding in ${this.tech}`);
  }
}

const company = new Company("Accrete Info.");
company.company();
console.log();
const employee = new Employee("Accrete info.", "Sumit", "Software Developer");
employee.company();
employee.greet();
console.log();
const developer = new Developer(
  "Accrete info.",
  "Jay",
  "MERN stack developer",
  "javascript",
);
developer.greet();
developer.codeIn();

console.log(developer instanceof Developer); // true
console.log(developer instanceof Employee); // true
console.log(developer instanceof Company); // true
console.log(developer instanceof Object); // true
