import React from "react";
import "./style.css";

function Table(props) {
  //add state.results 
  // on click for headings 
  // sort by something simple like dob, or name
  // 
  const searchedEmployee = props.results.filter(employee => {
    let fullname = employee.name.first + " " + employee.name.last
    return fullname.toUpperCase().includes(props.search.toUpperCase())});
  return (

    <table className="list-group">
      {searchedEmployee.map(result => (
        //use cols 
        <tr className="list-group-item" key={result.id}>
          <tr>
          <th>image</th>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
          <th>DOB</th>
          </tr>
          <tr>
          <td><img alt={result.name} className="img-fluid" src={result.picture.thumbnail} /></td>
          <td>{result.name.first}</td><td>{result.name.last}</td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{result.dob.date.substring(0,10)}</td>
          </tr>
        </tr>
      ))}
    </table>
  );
}

export default Table;