// import React, { useState } from "react";
// import { Button, Modal } from "react-bootstrap";

// const Contact = (props) => {
 
//   const contact = props.contact;

  
//   const [isShowing, setIsShowing] = useState(false);


//   const [name, setName] = useState(contact.name);
 
//   const [phoneNumber, setphoneNumber] = useState(contact.phoneNumber);

  
//   const handleEdit = () => {
    
//     const updatedContacts = {
//       name: name,
//       phoneNumber: phoneNumber,
//       id: contact.id,
//     };

    
//     props.editUser(contact.id, updatedContacts);

  
//     setIsShowing(false);
//   };

//   return (
//     <div>
//       <h1>{contact.name}</h1>
//       <h3>{contact.phoneNumber}</h3>
//       <Button onClick={() => setIsShowing(true)}>Edit</Button>
//       <Button variant="danger" onClick={() => props.deleteContact(contact.id)}>
//         Delete
//       </Button>

//       <Modal show={isShowing} onHide={() => setIsShowing(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//           <input
//             type="number"
//             value={phoneNumber}
//             onChange={(e) => {
//               setphoneNumber(e.target.value);
//             }}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setIsShowing(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleEdit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Contact;