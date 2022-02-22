import EmployeeDetailsComponent from "./EmployeeDataComponent";
import React, { Component }from "react";
import empList from "../Data/employeeList"
export default class FilterDataComponent extends Component {
    debugger;
    constructor() {
        super();
        this.state = {
            FilterByName: ""
        }
    }
    nameChange(event){
        this.setState({
            FilterByName: event.target.value
        })
    }
    return (){
        <>
            <h1>Employee List is Given Below...</h1>
            <label>Filter:</label>
            <input onChange={(event) => this.nameChange(event)} /><br />
            {empList.map(function(employee) {
                if(employee.name.includes(this.state.FilterByName))
                return (
                    <EmployeeDetailsComponent {...employee} ></EmployeeDetailsComponent>
                )
            })}
        </>

    }
        
}