import React from "react";
import styles from './styles'

export default function Header({title, id}: {title:string, id:string}) {
    return (
        <div style={styles.header}>
            <div>{id}</div>
            <h1 style={styles.title}>{title}</h1>
        </div>
    );
}