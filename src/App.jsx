import { store } from './redux/store';
import { Provider } from 'react-redux';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

import styles from './app.module.css';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;
