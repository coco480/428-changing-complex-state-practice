import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (event) => {
    event.target.name === "fName" &&
      setContact({
        fName: event.target.value,
        lName: contact.lName,
        email: contact.email
      });

    event.target.name === "lName" &&
      setContact({
        fName: contact.fName,
        lName: event.target.value,
        email: contact.email
      });

    event.target.name === "email" &&
      setContact({
        fName: contact.fName,
        lName: contact.email,
        email: event.target.value
      });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          //value={contact.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleChange}
          //value={contact.lName}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={handleChange}
          //value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
