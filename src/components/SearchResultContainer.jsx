import React, { Component } from "react";
import API from "../utils/API";
import "../App.css";
import EmployeeDetail from "./EmployeeDetail";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: [],
    isAlphabetical: false,
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        this.setState({ results: res.data.results, filteredResults: res.data.results});
        //setState same as filtered results
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  handleInputChange = (event) => {
    const value = event.target.value;
    const filteredResults = this.state.results.filter((employee) =>
      employee.name.first.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      search: value,
      filteredResults: filteredResults,
    });
  };
  handleSortChange = (event) => {
      // similar set up to handleInputChange

    const value = event.target.value;
    // const filteredResults = this.state.results.filter((employee) =>
    //   employee.name.first.toLowerCase().includes(value.toLowerCase())
    // );
    // this.setState({
    //   search: value,
    //   filteredResults: filteredResults,
    // });
  };


  render() {
    return (
      <>
        <div style={{ margin: 20, display: "flex", justifyContent: "center" }}>
          <input
            style={{
              height: 45,
              width: 200,
              borderRadius: 5,
              borderColor: "#E8E7EB",
            }}
            type="search"
            id="search"
            placeholder="Search"
            fontFamily="Reem Kufi"
            onChange={this.handleInputChange}
            value={this.state.search}
          ></input>
        </div>
       
            {/* move drop down here. */}
            {/* <th className="col dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Name
                    </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" value = false>Normal</a>
                            <a className="dropdown-item" value = true>Sorted Alphabetical</a>
                            
                        </div>
                  </th> */}


        <div>
          {this.state.filteredResults.map((employee) => (
            <EmployeeDetail
              image={employee.picture.thumbnail}
              name={employee.name.first + ' ' + employee.name.last}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date}
            />
          ))}
        </div>
      </>
    );
  }
}

export default SearchResultContainer;