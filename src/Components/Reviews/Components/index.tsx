import React from "react";
import styles from './styles'

export default function Reviews({title}: {title:string}) {
    return (
        <div style={styles.container}>
            <h1 >{title}</h1>
        </div>
    );
}