import React from 'react';
import styles from './Home.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
//import useReactRouter from 'use-react-router';

export default function Home() {
  //const { history } = useReactRouter();

  function search(term, location) { //Need to fix commented items to work with react router (will not allow run)
    //const urlEncodedTerm = encodeURI(term);
    //const urlEncodedLocation = encodeURI(location);
    //history.push(
      //`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    //);
  }

  return (
    <div className={styles.landing}>
      <div className={styles['search-area']}>
        <SearchBar search={search} />
        <SearchSuggestions />
      </div>
    </div>
  );
}
