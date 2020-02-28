import { Grid, 
    ExpansionPanel, 
    ExpansionPanelSummary, 
    Typography, 
    ExpansionPanelDetails,
    TextField 
} from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './tasklist.component.css';

export const TaskList = (props) => {
    return(
        <Grid item xs={4}>
            <div className="tasklist-container">
                <h3>{props.title}</h3>
            </div>
        </Grid>
)}