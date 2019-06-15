import React from 'react';

import styles from './ToggleButton.module.scss';

interface IToggleButtonProps {
    name: string;
    toggleState: boolean;
    onToggle: () => void;
}

const ToggleButton: React.FC<IToggleButtonProps> = (props) => {
    return (
        <div className={styles.toggleButton}>
            <span className={styles.text}>{props.name}</span>
            <div className={props.toggleState ? styles.container + " " + styles.on : styles.container} onClick={props.onToggle}>
                <div className={styles.button}></div>
            </div>
        </div>
    );
}

export default ToggleButton;