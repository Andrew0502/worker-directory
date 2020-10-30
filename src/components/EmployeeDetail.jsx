function EmployeeDetail(props) {
    return (
      <table class ="table table-striped">
          <thead>
              <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <th><img alt ="thumbnail" className="img-fluid" src={props.image} style={{ margin: "0 auto"}} /></th>
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