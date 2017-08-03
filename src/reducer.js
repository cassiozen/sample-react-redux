const ADD_CONTACT = "add_contact";
const REMOVE_CONTACT = "remove_contact";

// {id: 1, name: "cassio", email: "def@fe.com"}
export const addContact = contact => ({ type: ADD_CONTACT, contact });

export const removeContact = id => ({ type: REMOVE_CONTACT, id });

const reducer = (state = { contacts: [] }, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_CONTACT:
      newState.contacts = newState.contacts.concat(action.contact);
      return newState;

    default:
      return state;
  }
};

export default reducer;
