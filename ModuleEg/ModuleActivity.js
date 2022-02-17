function EmployeeDetails() {
    var name="Amresh";
    var age = 23;
    var designation = "Developer",
    
    var getName=function(){return name;}
    var getAge=function(){ return age;}
    var getDesignation=function(){return designation;}
   
  
    return {
      name: getName,
      age: getAge,
      designation: getDesignation,
      
    }
  }
  
  var newEmployee = EmployeeDetails()
  
  var userName = newEmployee.name();
  var userAge = newEmployee.age();
  var userDesig = newEmployee.designation(); 