import React, { useState, useEffect } from 'react';
import contactService from './services/contacts';
import FormInput from './components/FormInput';
import SearchInput from './components/SearchInput';
import ContactInfo from './components/ContactInfo';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearchText, setSearchText] = useState('');

  useEffect(() => {
    contactService.getAll().then((initialContacts) => {
      setPersons(initialContacts);
    });
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleDeleteContact = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      contactService.deleteContact(id).then(() => {
        const filteredList = persons.filter((person) => {
          return person.id !== id;
        });
        setPersons(filteredList);
      });
    }
  };

  const nameAlreadyExist = (newName) => {
    const lowerCaseSpacelessName = newName.toLowerCase().replace(/ /g, '');

    return persons.find(
      (person) =>
        lowerCaseSpacelessName === person.name.toLowerCase().replace(/ /g, '')
    );
  };

  const addNewContact = (contact) => {
    contactService.create(contact).then((returnedContact) => {
      setPersons(persons.concat(returnedContact));
      setNewName('');
      setNewNumber('');
    });
  };

  const updateExistingContact = (id, updatedData) => {
    contactService.update(id, updatedData).then((returnedContact) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : returnedContact))
      );
      setNewName('');
      setNewNumber('');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = nameAlreadyExist(newName);

    if (result) {
      if (
        window.confirm(`${result.name} already exist. Replace the old number?`)
      ) {
        const updatedContactInfo = {
          name: newName,
          number: newNumber,
        };
        updateExistingContact(result.id, updatedContactInfo);
      }
    } else {
      const newContact = {
        name: newName,
        number: newNumber,
      };
      addNewContact(newContact);
    }
  };

  const items = persons.filter((person) => {
    if (!newSearchText) {
      return persons;
    }

    const lowerCaseSpacelessText = newSearchText
      .toLowerCase()
      .replace(/ /g, '');

    return person.name
      .toLowerCase()
      .replace(/ /g, '')
      .includes(lowerCaseSpacelessText);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={newName}
          handleChange={handleNameChange}
          type={'text'}
          required
          label={'Name'}
        />
        <FormInput
          value={newNumber}
          handleChange={handleNumberChange}
          type={'text'}
          required
          label={'Phone number'}
        />
        <div>
          <button type='submit'>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <SearchInput
        label={'Search by Name:'}
        value={newSearchText}
        handleChange={handleSearchInputChange}
        type={'text'}
      />
      <ul>
        {items.map(({ name, number, id }) => {
          return (
            <ContactInfo
              key={id}
              name={name}
              number={number}
              id={id}
              handleDelete={handleDeleteContact}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
