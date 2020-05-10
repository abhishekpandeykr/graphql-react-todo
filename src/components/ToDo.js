import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDoCard = (todo) => {
  const color = getColor(todo)
  console.log("color", color);
  return(
      <div style={todoitem} onClick={() => todo.changeStatus(todo)}>
        <FontAwesomeIcon icon={todo.todoIcon} />
        <h3 style={todoitem.headingAlign}>{todo.taskName}</h3>
      </div>
  )
}

const todoitem = {
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  cursor:'pointer',
  headingAlign: {
    marginLeft:'10px'
  }
}

const getColor = (todo) => {
  console.log(todo);
  if(todo.status === "COMPLETED"){
    return {color:'green'}
  }
}


export default ToDoCard;