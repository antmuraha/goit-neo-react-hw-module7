import classnames from '../../libs/classnames';
import { Field, Form, Formik } from 'formik';
import validationSchema from './validationSchema';
import { useDataContactForm } from '../../redux/useData';

import styles from './index.module.css';

const ContactForm = () => {
  const { loading, handleAddContact } = useDataContactForm();

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleAddContact}>
      {({ errors, touched }) => (
        <Form className={styles.contactForm} autoComplete="off">
          <label>
            Name
            <Field type="text" name="name" />
            <div className={classnames(styles.error, errors.name && touched.name && styles.errorVisible)}>
              {errors.name}
            </div>
          </label>
          <label>
            Number
            <Field type="tel" name="number" />
            <div className={classnames(styles.error, errors.number && touched.number && styles.errorVisible)}>
              {errors.number}
            </div>
          </label>
          <button type="submit" disabled={loading} className={styles.addButton}>
            {loading ? 'Adding...' : 'Add Contact'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
