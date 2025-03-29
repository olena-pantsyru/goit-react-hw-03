import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import users from "./contacts.json";
import { addToLocalStorage, getFromLocalStorage } from "./helpers/localStorage";

const LS_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState(() => getFromLocalStorage(LS_KEY) ?? users);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    addToLocalStorage(LS_KEY, contacts);
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChangeValue={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;