import React from "react";
import Header from "../Header";
import Paper from "@mui/material/Paper";
import Reviews from "../Reviews";
import styles from './styles';

function App() {

  return (
    <div style={styles.container}>
      <div style={styles.background}>
        <Header id='ID:091021' title='La Casa de las Flores' />
      </div>
      <Paper elevation={3} style={styles.paper}>
        <Reviews />
      </Paper>
    </div>
  );
}

export default App;
