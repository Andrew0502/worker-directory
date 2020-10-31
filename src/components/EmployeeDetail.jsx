function EmployeeDetail(props) {
    return (
      <table className ="table ">
          <thead>
              <tr>
                  <th className="col-sm-2">Image</th>
                  <th className="col-sm-2">Name</th>
                  <th className="col-sm-2">Phone</th>
                  <th className="col-sm-2">Email</th>
                  <th className="col-sm-3">DOB</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <th><img alt ="thumbnail" className="img" src={props.image} style={{ margin: "auto"}} /></th>
                  <td>{props.name}</td>
                  <td>{props.phone}</td>
                  <td>{props.email}</td>
                  <td>{props.dob}</td>
              </tr>
          </tbody>
      </table>  
    )
}

export default EmployeeDetail;