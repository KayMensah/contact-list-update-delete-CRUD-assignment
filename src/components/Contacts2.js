import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteUserAction, editUserAction } from "../actions/action";
import { useDispatch } from "react-redux";

const Contacts2 = (props) => {
  const contact = props.contact;

  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = useState(false);

  const [name, setName] = useState(contact.name);

  const [email, setEmail] = useState(contact.email);

  const [phoneNumber, setphoneNumber] = useState(contact.phoneNumber);

  const [location, setLocation] = useState(contact.location);

  const handleDelete = () => {
    dispatch(deleteUserAction(contact.id));
  };

  const handleSubmit = () => {
    let userData = {
      id: contact.id,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      location: location,
    };

    dispatch(editUserAction(contact.id, userData));

    handleClose();
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <div>
        <h1>{contact.name}</h1>
        <h3>{contact.email}</h3>
        <h3>{contact.phoneNumber}</h3>
        <h5>{contact.location}</h5>
        <Button onClick={() => setIsShowing(true)}>Edit</Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contacts2;
