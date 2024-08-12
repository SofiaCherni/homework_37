import React from 'react';
import styles from './NoteItem.module.css';

function NoteItem (props){
    return(
        <div className={styles.noteItem}>
            <div>Ваш запис: {props.note}!</div>
            <button onClick={() => props.onDelete(props.index)} className={styles.deleteButton}>Стерти</button>
        </div>
    )
}

export default NoteItem;