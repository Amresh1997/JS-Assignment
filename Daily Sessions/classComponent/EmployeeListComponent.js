import React from 'react';
import Axios from "axios"
import EmployeeDetailsComponent from "../Components/EmployeeDetailsComponent"

export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    render() {
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.eid} {...employee} deleteEmployee={this.deleteEmployee}></EmployeeDetailsComponent>
                })}
            </div>
        )
    }
    

    componentDidMount() {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee/AllEmps");
        
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }
    deleteEmployee = (event) => 
{
    Axios.delete("https://localhost:5001/api/Employee/DeleteEmp/?"+event.target.eid).then(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee/AllEmps");
        
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })

        })

}
}




 

