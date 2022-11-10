import React from 'react';
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';

export function NavBar(props) { //Search bar for when we looking at the buisnesses
    return (
        <div className={styles['nav-bar']}>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
        </div>
    );
}