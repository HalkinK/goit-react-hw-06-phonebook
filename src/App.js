import { useState, useEffect } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
    const newContact = { id: shortid.generate(), name, number };

    const existContactName = contacts.find((contact) => contact.name === name);

    const existContactNumber = contacts.find(
      (contact) => contact.number === number
    );

    const existContact =
      (existContactName && `${name}`) || (existContactNumber && `${number}`);

    existContactName || existContactNumber
      ? alert(`${existContact} is already in contacts`)
      : setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const onDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onFormSubmit} />
      <Filter value={filter} onChange={changeFilter} />
      <h2>Contacts</h2>
      <ContactList
        contacts={getVisibleContacts()}
        deleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
