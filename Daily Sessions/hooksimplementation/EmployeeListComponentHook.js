import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import EmployeeDetailsComponent from "../Components/EmployeeDetailsComponent"

export default function EmployeeListComponentHook() {
   
            
            var [employeeList, setemployeeList] = useState([]);

            useEffect(() => {
                var dataPromise = Axios.get("https://localhost:5001/api/Employee/AllEmps");
                dataPromise.then((response) => {
                    setemployeeList(response.data);
                })
            }, [])
        
    

    
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.eid} {...employee} ></EmployeeDetailsComponent>
                })}
            </div>
        )
    
    

    
}
 

