import React from "react";
import Header from "../../Components/Header.jsx";

export default function ViewTicket(props) {
  /*
  TODO:
  Create call to backend using the ID of the current ticket
  Create UI for showing ticket information
  Add call to backend to submit changes to DB
  Redirect back to Home routes
  */
  return (
    <>
      <Header />
      {console.log(props)}
    </>
  );
}
