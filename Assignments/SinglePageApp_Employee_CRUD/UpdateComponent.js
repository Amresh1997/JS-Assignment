import Axios from 'axios';
import React from 'react';

export default class UpdateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            id: "",
            salary:"",
            city: ""
        }
    }

    render() {
        debugger;
        return (
            <div>
                Employee Name: <input type="text" value={this.state.name} /><br/><br/>
                Id: <input type="text" value={this.state.id} /><br/><br/>
                Salary: <input type="text" value={this.state.salary} /><br/><br/>
                City: <input type="text" value={this.state.city} /><br/><br/>
                <input type="button" value="Submit" onClick={this.updateEmployee} />
            </div>
        )
    }

    updateEmployee = () => {
        // Have some Put Request...
        const data={ename:this.state.name,
                    eid:this.state.id,
                    salary:this.state.salary,
                    city:this.state.city
                   }
        Axios.put("https://localhost:5001/api/Employee/EditEmp/"+this.state.id,).then((response)=>{
            alert("Details updated");
            this.props.history.push("/");
        });
    }

    componentDidMount() {
        alert(this.props.match.params.userId);
        Axios.get("https://localhost:5001/api/Employee/EmpbyID/" + this.props.match.params.userId).then((response) => {
            this.setState({
                name: response.data.ename,
                salary: response.data.salary,
                id: response.data.eid,
                city:response.data.city

            })
        })
    }
}