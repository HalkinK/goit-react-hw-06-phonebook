import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./contact-actions";

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    const matching = state.find(
      (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
    );
    if (matching) {
      alert(`${matching.name} is already in contacts.`);
      return;
    }
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
