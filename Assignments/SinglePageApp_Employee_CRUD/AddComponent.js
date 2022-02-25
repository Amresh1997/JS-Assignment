import Axios from 'axios';
import React from 'react';



export default class AddComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            Id: "",
            Name: "",
            salary:"",
            city: ""
        }
    }
    
    

    onIdChange =(event) => {
        this.state.Id=event.target.value;
    };

    onNameChange = (event) => {
        this
        .state.Name=event.target.value;
    };

    onsalaryChange = (event) => {
        this.state.salary=event.target.value;
    };

    oncityChange = (event) => {
        this.state.city=event.target.value;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        

         Axios.post('https://localhost:5001/api/Employee/AddEmp', {
                eid:this.state.Id,ename:this.state.Name, salary:this.state.salary, city:this.state.city
              })
              .then( (response)=> {
                alert(`
                ____New Employee Added____\n
               
                Name : ${this.state.Name}
                id : ${this.state.Id}
                Salary : ${this.state.salary}
                City : ${this.state.city}
              `);
              
              this.props.history.push("/");
    })}

    render(){
    return (
        <div >
            <form className="form-group" onSubmit={this.handleSubmit}>
                <input
                    placeholder="Employee ID"
                    onChange={this.onIdChange} required />
                <br />

                <input
                    placeholder="Employee Name" 
                    onChange={this.onNameChange} required />
                <br />

                <input
                    placeholder="Salary" 
                    onChange={this.onsalaryChange} required />
                <br />

                <input
                    placeholder="city" 
                    onChange={this.oncityChange} required />
                <br />

                <button type="submit">Add </button>
            </form>
        </div>
    )
    }
}