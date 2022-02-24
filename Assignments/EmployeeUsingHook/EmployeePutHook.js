import { useState, useEffect } from 'react';
import Axios from 'axios';


export default function EmployeePutHook(props) {
    
    
    var [Id, setId] = useState("");
    var [Name, setName] = useState("");
    var [salary, setAddress] = useState("");
    var [city, setBalance] = useState("");

   

    useEffect(() => {
        setId(props.dataSend.Id);
        setName(props.dataSend.Name);
        setAddress(props.dataSend.salary);
        setBalance(props.dataSend.city);
        debugger;
    }, [])

    const onIdChange = e => {
        setId(e.target.value);
    };

    const onNameChange = e => {
        setName(e.target.value);
    };

    const onsalaryChange = e => {
        setAddress(e.target.value);
    };

    const oncityChange = e => {
        setBalance(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            Id,
            Name ,
            salary,
            city,
    };

       

        Axios
          .post("https://localhost:5001/api/Employee/AddEmployee", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
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

                <button type="submit">Add </button>
            </form>
        </div>
    );
}