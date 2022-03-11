import React, { useState } from "react";
import "./App.css";
import ContactForm2 from "./components/ContactForm2";
import ContactList2 from "./components/ContactList2";
// import { v4 as uuid } from "uuid";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Gideon", phoneNumber: "0244419419", location: "Achimota" },
    { id: 2, name: "Yooku", phoneNumber: "0453333322", location: "London" },
    { id: 3, name: "Raymond", phoneNumber: "0447982312", location: "Chicago" },
  ]);
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const deleteContact = (id) => {
    // const filteredContacts = contacts.filter(
    //   (contact) => {
    //   if (id !== contact.id) return contact;
    // }

    // );
    // setContacts(filteredContacts);

    let getIndex = contacts.findIndex((contact) => {
      return contact.id === id;
    });

    console.log(getIndex);

    if (getIndex !== -1) {
      contacts.splice(getIndex, 1);
    }

    //setContacts(filteredContacts);
  };

  const editContact = (id, updateContact) => {
    const updatedContacts = contacts.map((contact) => {
      if (id === contact.id) return updatedContacts;
      else return contact;
    });
    setContacts(updatedContacts);
  };

  return (
    <div className="main">
      <h1 className="main-header">Korkor's Contact List</h1>
      <div>
        <ContactForm2 addContact={addContact} />
        <ContactList2
          contacts={contacts}
          deleteContact={deleteContact}
          editContact={editContact}
        />
      </div>
    </div>
  );
};

export default App;
