//import { v4 as uuid } from "uuid";

const initialState = {
  contacts2: [
    {
      name: "Korkor",
      email: "kaye@gmail.com",
      phoneNumber: 40243874698,
      location: "Accra",
    },
    {
      name: "Mauda",
      email: "maud@gmail.com",
      phoneNumber: 8899874698,
      location: "London",
    },
  ],
  // eslint-disable-next-line no-dupe-keys
  contacts: [],
  number: 0,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, contacts: [...state.contacts, action.payload] };

    case "EDIT_USER":
      const editedUsers = state.contacts.map((contacts) => {
        if (contacts.id !== action.payload.id) return action.payload.userData;
        return contacts;
      });

      return { ...state, contacts: editedUsers };

    case "DELETE_USER":
      // eslint-disable-next-line array-callback-return
      const filteredUsers = state.contacts.filter((contact) => {
        if (contact.id !== action.payload) return contact;
      });

      return { ...state, contacts: filteredUsers };

    default:
      return state;
  }
};

export default contactsReducer;
