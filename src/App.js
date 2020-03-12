import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Grid, TextField, Button } from '@material-ui/core';
import { TaskList } from './components/tasklist/tasklist.component';
import { createTask, loadTasksRequest } from './redux/actions/index';
import './App.css';

function App() {

  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(loadTasksRequest())
  }, [dispatch]);

  const handleClick = () => {
    let new_task = {
      text: task,
      createdAt: new Date(Date.now()).toLocaleString(),
      status: "new"
    };
    dispatch(createTask({
      text: new_task.text,
      createdAt: new_task.createdAt,
      status: new_task.status
    }));
  }

  return (
    <div className="main-container">
      <Grid container spacing={3}>
        <Grid item xs={12}><h2>Montrello</h2></Grid>
        <Grid container spacing={3} className="inputs-container">
          <Grid item xs={2}>
            <TextField id="filled-basic" label="New Task" variant="filled" className="task-input" onChange = { event => setTask(event.target.value) } />
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" size="large" className="create-button" onClick = { handleClick }>ADD</Button>
          </Grid>
        </Grid>
        <TaskList title="Task List" status="new"/>
        <TaskList title="In Proccess" status="in_proccess"/>
        <TaskList title="Done" status="done"/>
      </Grid>
    </div>
  );
}

export default App;
