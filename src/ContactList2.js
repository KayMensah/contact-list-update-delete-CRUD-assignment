import React from "react";
import Contacts2 from "./Contacts2";

const ContactList2 = (props) => {
    return (
        <div>
            {props.contacts.map((contact, index) => {

                return (
                   <Contacts2 key={index}
                   contact={contact}
                   deleteContact={props.deleteContact}
                   editContact={props.editContact} />
                );
            })}
        </div>
    );
};

export default ContactList2;
