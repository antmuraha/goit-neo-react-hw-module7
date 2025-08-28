import { useDataContactsList } from '../../redux/useData';
import Contact from '../Contact';

import styles from './index.module.css';

const ContactList = () => {
  const { contacts, handleDeleteContact } = useDataContactsList();

  return (
    <div className={styles.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} onDelete={handleDeleteContact} />
      ))}
    </div>
  );
};

export default ContactList;
