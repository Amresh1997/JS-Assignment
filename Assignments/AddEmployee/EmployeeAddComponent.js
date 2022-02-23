import React from 'react';
import Axios from "axios"


export default class EmployeeAddComponent extends React.Component {
    
    constructor(props){
        super(props)
        this.state = { id:'',Name:'', sal:null, city:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleChange(event){
        this.setState({
          
          [event.target.name] : event.target.value
        })}

        handleSubmit(event){
            const {  id,Name, sal, city } = this.state
            event.preventDefault()
            
            Axios.post('https://localhost:5001/api/Employee/AddEmp', {
                eid:this.state.id,ename:this.state.Name, salary:this.state.sal, city:this.state.city
              })
              .then(function (response) {
                alert(`
                ____New Employee Added____\n
               
                Name : ${Name}
                id : ${id}
                Salary : ${sal}
                City : ${city}
              `)
              })

           
          }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Enter ID</label>
                        <input className="form-control" type="number" name='id'  value = {this.state.id} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Enter Name</label>
                        
                        <input type="text" className="form-control" name='Name'  value = {this.state.Name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Enter Salary</label>
                        
                        <input className="form-control" type="number" name='sal'  value = {this.state.sal} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Enter City</label>
                       
                        <input className="form-control" type="text" name='city'  value = {this.state.city} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Employee" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
    

}



 

