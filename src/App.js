import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
}

export default App;
