import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from './contactsSlice';
import { useState } from 'react';
import { changeFilter } from './filtersSlice';

export const useDataContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const search = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return {
    contacts: search ? contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())) : contacts,
    handleDeleteContact,
  };
};

// Simulate an API call to create a contact
async function createContact(name, number) {
  await new Promise(resolve => setTimeout(resolve, 300));

  return {
    id: Date.now(),
    name,
    number,
  };
}

export const useDataContactForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddContact = async (values, { resetForm }) => {
    setLoading(true);
    const newContact = await createContact(values.name, values.number);
    dispatch(addContact(newContact));
    setLoading(false);
    resetForm();
  };

  return { loading, handleAddContact };
};

export const useDataSearchBox = () => {
  const search = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const onSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return { search, onSearch };
};
