import { useState } from "react";
import shortid from "shortid";
import styles from "../ContactForm/ContactForm.module.css";
import PropTypes from "prop-types";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = () => shortid.generate();
  const numberInputId = () => shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  function resetForm() {
    setName("");
    setNumber("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <br />
      <label htmlFor={numberInputId}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          id={numberInputId}
        />
      </label>
      <br />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
