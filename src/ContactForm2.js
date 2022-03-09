import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const ContactForm2 = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
      <form
        className="form-style"
        onSubmit={(e) => {
          // console.log('Hit here')
          e.preventDefault();

          let newContact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            location: location,
            id: uuid(),
          };
          props.addContact(newContact);
          setfirstName("");
          setlastName("");
          setEmail("");
          setphoneNumber("");
          setLocation("");
        }}
      >
        <h5 className="contact-style">Update a contact</h5>
        <label for="fname">First Name:</label>
        <input
          className="firstname-style"
          id="fname"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          className="input-style"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          className="email-style"
          type="email"
          placeholder="Email"
          //   className="input-style"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Phone Number:</label>
        <input
          className="phone-style"
          type="number"
          placeholder="PhoneNumber"
          //   className="input-style"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <br />
        <label>Location: </label>
        <input
          className="location-style"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <br />

        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
        <br />
      </form>
    </div>
  );
};

export default ContactForm2;
