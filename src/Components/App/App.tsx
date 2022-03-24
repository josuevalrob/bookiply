import React from "react";
import logo from "./logo.svg";
import Header from "../Header";
import Paper from "@mui/material/Paper";
import Reviews from "../Reviews";
import styles from './styles'

function App() {
  return (
    <div style={styles.container}>
      <Header id='ID:091021' title='La Casa de las Flores' />
      <Paper elevation={3} style={styles.paper}>
        <Reviews title='17 Reviews' />
      </Paper>
    </div>
  );
}

export default App;
