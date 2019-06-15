import React from 'react';

import logo from '../logo.svg';
import styles from './Spinner.module.scss';

const Spinner: React.FC = () => {
    return (
        <div className={styles.loading}>
            <img src={logo} className={styles.spinner} alt="logo" />
            <div className={styles.text}>Loading...</div>
        </div>
    );
}

export default Spinner;