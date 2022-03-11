export const addUserAction = (contact) => {
  return {
    type: "ADD_USER",
    payload: contact,
  };
};

export const deleteUserAction = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

export const editUserAction = (id, userData) => {
  return {
    type: "EDIT_USER",
    payload: {
      id: id,
      userData: userData,
    },
  };
};
