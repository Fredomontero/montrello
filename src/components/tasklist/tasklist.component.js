import { 
    Grid, 
    Card, 
    CardActionArea, 
    CardContent, 
    Typography, 
    CardActions,
    Button
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteTaskRequest, updateTaskRequest } from '../../redux/actions/index';

import './tasklist.component.css';

export const TaskList = (props) => {
    
    const dispatch = useDispatch();
    const tasks_list = useSelector(state => state.tasks);

    const deleteTask = (task_id) => {
        dispatch(deleteTaskRequest(task_id));
    }

    const updateTask = (data) => {
        dispatch(updateTaskRequest(data));
    }

    return(
        <Grid item xs={4}>
            <div className="tasklist-container">
                <h3>{props.title}</h3>
                {
                    tasks_list.filter(task => task.status === props.status)
                    .map( task => {
                        return(
                            <Card key={task._id} className="task-container">
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {task.text}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {task.createdAt}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                    <Button
                                        className="action-button"
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon/>}
                                        onClick = { () => deleteTask(task._id) }
                                    >
                                        Delete
                                    </Button>
                                    {
                                        (props.status === "new") ? (
                                            <Button
                                                className="action-button"
                                                variant="contained"
                                                color="primary"
                                                endIcon={<Icon>send</Icon>}
                                                onClick = { () => updateTask({task_id: task._id, status: "in_proccess"}) }
                                            >
                                                In Proccess
                                            </Button>
                                        ):( 
                                            (props.status === "in_proccess") ? (
                                                <Button
                                                    className="action-button"
                                                    variant="contained"
                                                    color="primary"
                                                    endIcon={<Icon>send</Icon>}
                                                    onClick = { () => updateTask({task_id: task._id, status: "done"}) }
                                                >
                                                    Done
                                                </Button>
                                            ):(
                                                null
                                            )
                                        )
                                    }
                                    
                                <CardActions>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </div>
        </Grid>
)}