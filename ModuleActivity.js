function EmployeeDetails() {
    var name="Amresh";
    var age = 23;
    var designation = "Developer",
    
    var getName=function(name){name=name;}
    var getAge=function(age){age=age;}
    var getDesignation=function(Desig){designation=Desig;}
   
  
    return {
      name: getName,
      age: getAge,
      designation: getDesignation,
      
    }
  }
  
  var newEmployee = EmployeeDetails()
  
  var userName = newEmployee.getName("amresh");
  var userAge = newEmployee.getAge(23);
  var userDesig = newEmployee.getDesignation("Developer"); 