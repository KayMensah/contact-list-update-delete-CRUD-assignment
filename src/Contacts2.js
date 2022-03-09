import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Contacts2 = (props) => {
  const contact = props.contact;

  const [isShowing, setIsShowing] = useState(false);

  const [name, setName] = useState(contact.name);

  const [email, setEmail] = useState(contact.email);

  const [phoneNumber, setphoneNumber] = useState(contact.phoneNumber);

  const [location, setLocation] = useState(contact.location);

  const handleEdit = () => {
    const updatedContacts = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      location: location,
      id: contact.id,
    };

    props.editUser(contact.id, updatedContacts);

    setIsShowing(false);
  };

  return (
    <div>
      <h1>{contact.name}</h1>
      <h3>{contact.email}</h3>
      <h3>{contact.phoneNumber}</h3>
      <h3>{contact.location}</h3>
      <Button onClick={() => setIsShowing(true)}>Edit</Button>
      <Button variant="danger" onClick={() => props.deleteContact(contact.id)}>
        Delete
      </Button>

      <Modal show={isShowing} onHide={() => setIsShowing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            type="email"
            // eslint-disable-next-line no-undef
            value={email}
            onChange={(e) => {
              // eslint-disable-next-line no-undef
              setEmail(e.target.value);
            }}
          />
          <label>Phone Number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
          />
          <label>Location</label>
          <input
            type="text"
            // eslint-disable-next-line no-restricted-globals
            value={location}
            onChange={(e) => {
              // eslint-disable-next-line no-undef
              setLocation(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShowing(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contacts2;
