import { useState, useEffect } from 'react';
import Axios from "axios";

export default function AddEmployeeHook() {
    var [Id, setId] = useState("");
    var [Name, setName] = useState("");
    var [salary, setsalary] = useState("");
    var [city, setcity] = useState("");
    

    const onIdChange = e => {
        setId(e.target.value);
    };

    const onNameChange = e => {
        setName(e.target.value);
    };

    const onsalaryChange = e => {
        setsalary(e.target.value);
    };

    const oncityChange = e => {
        setcity(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        

         Axios.post('https://localhost:5001/api/Employee/AddEmp', {
                eid:Id,ename:Name, salary:salary, city:city
              })
              .then(function (response) {
                alert(`
                ____New Employee Added____\n
               
                Name : ${Name}
                id : ${Id}
                Salary : ${salary}
                City : ${city}
              `)
    })

    return (
        <div >
            <form className="form-group" onSubmit={handleSubmit}>
                <input
                    placeholder="Employee ID" value={Id}
                    onChange={onIdChange} required />
                <br />

                <input
                    placeholder="Employee Name" value={Name}
                    onChange={onNameChange} required />
                <br />

                <input
                    placeholder="Salary" value={salary}
                    onChange={onsalaryChange} required />
                <br />

                <input
                    placeholder="city" value={city}
                    onChange={oncityChange} required />
                <br />

                <button type="submit">Add </button>
            </form>
        </div>
    )
}}