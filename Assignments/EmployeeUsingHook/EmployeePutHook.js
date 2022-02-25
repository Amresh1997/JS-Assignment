import { useState, useEffect } from 'react';
import Axios from 'axios';


export default function EmployeePutHook(props) {
    
    
    var [Id, setId] = useState("");
    var [Name, setName] = useState("");
    var [salary, setsalary] = useState("");
    var [city, setcity] = useState("");

   

    useEffect(() => {
        setId(props.dataSend.Id);
        setName(props.dataSend.Name);
        setsalary(props.dataSend.salary);
        setcity(props.dataSend.city);
        debugger;
    }, [])

    const onIdChange = (event) => {
        setId((event).target.value);
    };

    const onNameChange = (event) => {
        setName((event).target.value);
    };

    const onsalaryChange = (event) => {
        setsalary((event).target.value);
    };

    const oncityChange = (event) => {
        setcity((event).target.value);
    };

    const handleSubmit = (event) => {
        (event).preventDefault();
        const data = {
            Id,
            Name ,
            salary,
            city,
    };

       

        Axios.post("https://localhost:5001/api/Employee/EditEmployee"+Id, data)
          .then((resolve) => alert("Details Updated"));
    };

    return (
        <div >
            <form className="form-group" onSubmit={handleSubmit}>
               
                <input
                    placeholder={props.dataSend.Id} value={Id}
                    onChange={onIdChange} required />
                <br />

                <input
                    placeholder={props.dataSend.Name} value={Name}
                    onChange={onNameChange} required />
                <br />

                <input
                    placeholder={props.dataSend.salary} value={salary}
                    onChange={onsalaryChange} required />
                <br />

                <input
                    placeholder={props.dataSend.city} value={city}
                    onChange={oncityChange} required />
                <br />

                <button type="submit">Edit </button>
            </form>
        </div>
    );
}