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
  
  sortEmployeeNames = (event) => {
    const value = event.target.value;
    const filteredResults = this.state.results.sort(function(a, b) {
      var nameA = a.name.first.toUpperCase();
      var nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
    })
    this.setState({
      search: value,
      filteredResults: filteredResults,
    });
  }


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
       
        <button type="button" class="btn btn-primary"
        onClick={this.sortEmployeeNames}>
          Sort Alphabetically by First Name
        </button>


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