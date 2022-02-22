class Employee {
    constructor(name, age) {
      this.name = name; // 1 MB
      this.age = age; // 1 MB
    }
    
    getEmpName() { // 2MB
      return this.name;
    }
    
    getEmpAge() {  // 2 MB
      return this.age;
    }
}

class Manager extends Employee {

}

var myManager = new Manager()


var myEmployee1 = new Employee("Mayank", 20);
var myEmployee2 = new Employee("Anshul", 20);
var myEmployee3 = new Employee("Ankit", 20);

var name = myEmployee1.getEmpName()

myEmployee1.toString()

debugger;

// 10000 Employees... = 20004 MB

// 60000