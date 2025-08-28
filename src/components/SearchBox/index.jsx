import { useId } from 'react';
import { useDataSearchBox } from '../../redux/useData';

import styles from './index.module.css';

const SearchBox = () => {
  const { search, onSearch } = useDataSearchBox();
  const id = useId();

  return (
    <div className={styles.searchBox}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} value={search} onChange={onSearch} />
    </div>
  );
};

export default SearchBox;
