import React, { useState, useEffect } from "react";
import Table from "../Table/index";
import Nav from "../Nav/index";
import API from "../../utils/API";
// import "../styles/DataArea.css";

const Area = () => {

  let [users, setUsers] = useState([{}]);
  let [orderAscend, setOrderAscend] = useState(true);
  let [filteredUsers, setFilteredUsers] = useState([{}]);

  
  const headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" },
  ];
  
  let handleSort = (heading) => {
    
    setOrderAscend(order => !order)
    
    const compareFnc = (a, b) => {
      if (orderAscend) {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    
    setFilteredUsers(filteredUsers.sort(compareFnc))
    // setFilteredUsers({ filteredUsers: sortedUsers });
  };
  
  const handleSearchChange = (event) => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = users.filter((item) => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    setFilteredUsers((filteredUsers = filteredList));
  };
  
  useEffect(() => {
  API.getUsers().then((results) => {
   setUsers(results.data.results);
   setFilteredUsers(results.data.results);
  });
  
}, []);
    return (
      <>
        <Nav handleSearchChange={handleSearchChange} />
        <div className="data-area">
          <Table
            headings={headings}
            users={filteredUsers}
            handleSort={handleSort}
          />
        </div>
      </>
    );
};

export default Area;