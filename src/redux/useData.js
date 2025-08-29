import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from './filtersSlice';
import { addContact, deleteContact } from './contactsOps';
import { selectFilteredContacts } from './contactsSlice';

export const useDataContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return {
    contacts,
    handleDeleteContact,
  };
};

export const useDataContactForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddContact = async (values, { resetForm }) => {
    setLoading(true);
    await dispatch(addContact({ name: values.name, number: values.number }));
    setLoading(false);
    resetForm();
  };

  return { loading, handleAddContact };
};

export const useDataSearchBox = () => {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return { search, onSearch };
};
