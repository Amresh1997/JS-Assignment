export default function EmployeeDetailsComponent(props) {
    return (
          <div className="card" style={{width: "18rem", margin: "20px", display: "inline-block"}}>
              <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
              <div className="card-body">
                  
                  <h5 className="card-title">Name:{props.ename}</h5>
                  <h5 className="card-title">ID:{props.eid}</h5>
                  <h5 className="card-title">Salary:{props.salary}</h5>
                  <h5 className="card-title">City:{props.city}</h5>
                  
                  <input type="button" id={props.eid} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
                  <input style={{marginLeft: "5px"}} type="button" name={props.id} className="btn btn-primary" value="Update" onClick={props.updateEmployee} />
              </div>
          </div>
    )
}

