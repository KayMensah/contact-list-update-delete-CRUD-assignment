import { createStore } from "redux";
import contactsReducer from "./reducers/contacts2Reducer";

export const store = createStore(contactsReducer);
