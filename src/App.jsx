import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

import styles from './app.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
