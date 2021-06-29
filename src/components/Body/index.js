import React from "react"

function Body({ users }) {

  // // with string modification
  //   function formatDate(date) {
  //     const dateArray = date.split("-");
  //     const year = dateArray[0];
  //     const month = dateArray[1];
  //     const dayArray = dateArray[2].split("T");
  //     const day = dayArray[0];
  //     const formattedDate = [month, day, year].join("-");
  //     return formattedDate;
  //   }
  
  // With time constructor 
  function formatDate(date){
    const dateform = new Date(date);
    const year = dateform.getFullYear();
    let month = (dateform.getMonth()+1 <10) ? `0${dateform.getMonth()+1}` : dateform.getMonth()+1;
    let dt = (dateform.getDate() <10) ? `0${dateform.getDate()}`: dateform.getDate();
    const formattedDate = (`${month}-${dt}-${year}`)
    return formattedDate;
  }
  
  
    return (
      <tbody>
        {/* if user index and user name are not undefined*/}
        {users[0] !== undefined && users[0].name !== undefined ? (
          /* map through users data */
          users.map(({ login, name, picture, phone, email, dob }) => {
            return (
              // user login uuid key 
              <tr key={login.uuid}>
                {/* image col using name as alt and getting image from user data*/}
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.medium}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive"
                  />
                </td>
                {/*name col using user data*/}
                <td data-th="Name" className="name-cell align-middle">
                  {name.first} {name.last}
                </td>
                {/*phone col using user data */}
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                {/*Email col using user data */}
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                {/*DOB col using user data */}
                <td data-th="DOB" className="align-middle">
                  {formatDate(dob.date)}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
  export default Body;