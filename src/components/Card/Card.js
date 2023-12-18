import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, customStyle }) => {
    return (
        <div className={`${styles.Card} ${customStyle}`}>
            {children}
        </div>
    );
};

export default Card;
