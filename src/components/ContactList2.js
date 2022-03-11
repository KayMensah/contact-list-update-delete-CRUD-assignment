import React from "react";
import { useSelector } from "react-redux";
import Contacts2 from "./Contacts2";

const ContactList2 = () => {
  const Contacts = useSelector((state) => {
    return state.contacts2;
  });

  const renderList = Contacts.map((contact, index) => {
    return <Contacts2 key={`${index}-${contact.name}`} contact={contact} />;
  });

  return (
    <div>
      <h1>Contact list</h1>
      {renderList}
    </div>
  );
};

// const ContactList2 = (props) => {
//   const contact = useSelector((state) => {
//     return state.Contacts2;
//   });
//   return (
//     <div>
//       {props.contacts.map((contact, index) => {
//         return (
//           <Contacts2
//             key={index}
//             contact={contact}
//             deleteContact={props.deleteContact}
//             editContact={props.editContact}
//           />
//         );
//       })}
//     </div>
//   );
// };

export default ContactList2;
