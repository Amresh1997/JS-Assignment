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
            <>
                
                <input type="button" value="Add More Employee" onClick={this.addEmployee} />
                <h1>Employee List is given Below:</h1>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.eid} {...employee} updateEmployee={this.updateEmployee} deleteEmployee={this.deleteEmployee}></EmployeeDetailsComponent>
                })}
            </>
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
    addEmployee=(event)=>{
        this.props.history.push("/add");
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
updateEmployee = (event) => {
    
    var employeeId = event.target.name;
    this.props.history.push("/update/" + employeeId);
}
}




 

