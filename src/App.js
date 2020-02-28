import React from 'react';
import './App.css';
import { Grid, TextField } from '@material-ui/core';
import { TaskList } from './components/tasklist/tasklist.component';

function App() {
  return (
    <div className="main-container">
      <Grid container spacing={3}>
        <Grid item xs={12}><h2>Montrello</h2></Grid>
        <Grid item xs={12}>
          <TextField id="filled-basic" label="New Task" variant="filled" className="task-input" />
        </Grid>
        <TaskList title="Task List"/>
        <TaskList title="In Proccess"/>
        <TaskList title="Done"/>
      </Grid>
    </div>
  );
}

export default App;
