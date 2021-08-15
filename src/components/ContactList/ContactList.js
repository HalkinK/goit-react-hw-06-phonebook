import React from "react";

import styles from "../ContactList/ContactItem/ContactItem.module.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contact-actions";

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  const getContactList = (state) => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const contacts = useSelector(getContactList);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className={styles.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
