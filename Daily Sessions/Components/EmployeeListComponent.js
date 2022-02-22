import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import React, { Component }from "react";


export default function EmployeeListComponent(props) {
    debugger;
    return (
        <div>
            <h1>Employee List is Given Below...</h1>
            <label>Filter:</label>
            <input onChange={(event) => this.nameChange(event)} /><br />
            {props.empList.map(function(employee) {
                return (
                    <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                )
            })}
        </div>
    )
}

