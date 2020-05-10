import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '40ch',
    },
  },
}));

const InputField = ({newToDo}) => {
  const classes = useStyles();

  const createToDO = event => {
    if(event.key==="Enter"){
      if(event.target.value.length > 3){
        const newToDoReq = {
          taskName:event.target.value,
          status:'NOT_STARTED'
        }
        newToDo(newToDoReq)
      } else {
      }
    }
  }
  return (
    <div className={classes.root}>
      <TextField onKeyDown={createToDO} id="outlined-basic" label="Enter Your Task" variant="outlined" />
  </div>
  )
}

export default InputField