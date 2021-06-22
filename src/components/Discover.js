import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";

class Discover extends Component {
  state = {
    results:[],
    search:""
  };

  componentDidMount = () => {
    API.getUsers().then(res => 
      this.setState({
        results: res.data.results}))
      .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
      
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
        <Table results={this.state.results} search={this.state.search}/>
      </div>
    );
  }
}

export default Discover;
