import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";



class Discover extends Component {
  state = {
    results:[],
    search:""
  };

  componentDidMount() {
    this.loadsEmployee();
  }

  loadsEmployee = () => {
    API.getUsers()
      .then(res => this.setState({results: res.data.results}))
      .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Employee Directory</h1>
        {/* <h3 className="text-center">
          Click on carrots to filter by heading or use the search to narrow your!
        </h3> */}
        <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          value={this.state.search}
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Search for employees by..."
          id="breed"
        />
      </div>
    </form>
        <Card results={this.state.results} search={this.state.search}/>
      </div>
    );
  }
}

export default Discover;
