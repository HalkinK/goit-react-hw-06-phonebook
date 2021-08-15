import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: { id: shortid.generate(), name, number },
// });

export const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

export const deleteContact = createAction("contacts/delete");

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export const changeFilter = createAction("contacts/changeFilter");

// export default changeFilter;

// export { addContact, deleteContact, changeFilter };
