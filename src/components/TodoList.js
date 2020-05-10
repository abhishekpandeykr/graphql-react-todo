import React from 'react';
import Paper from '@material-ui/core/Paper';
import ToDoCard from './ToDo'
import { makeStyles } from '@material-ui/core/styles';
import { faCheckCircle,faCircle } from "@fortawesome/free-solid-svg-icons";
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(.5),
      width: '35ch',
    },
  },
})); 

const ToDoListComponent = ({getAllToDo=[], changeStatus}) => {
  const classes = useStyles();
  return (
    <div style={todoAlignment}>
      {getAllToDo.map((todo,index) => (
      <Paper className={classes.root} variant="elevation" key={index} elevation={1} rounded="true" >
        <ToDoCard {...todoIcon(todo, changeStatus)} />
      </Paper>
    ))}
    </div>
  )
  
}

const todoAlignment = {
  alignSelf:'center',
  maxHeight:'450px',
  overflowY:'auto',
}

const todoIcon = (todo, changeStatus) => {
  const currentToDo = {...todo,changeStatus };
  if(currentToDo.status === 'COMPLETED') {
    return {...currentToDo, todoIcon:faCheckCircle}
  }
  return {...currentToDo, todoIcon:faCircle};
}

export default ToDoListComponent;
