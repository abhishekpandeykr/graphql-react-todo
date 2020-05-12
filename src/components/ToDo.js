import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import transitions from "@material-ui/core/styles/transitions";

const ToDoCard = (todo) => {
  const color = getColor(todo);
  return (
    <div style={todoitem} onClick={() => todo.changeStatus(todo)}>
      <FontAwesomeIcon icon={todo.todoIcon} />
      <h3 style={todoitem.headingAlign}>{todo.taskName}</h3>
    </div>
  );
};

const todoitem = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  transition: "width 2s",
  headingAlign: {
    marginLeft: "10px",
  },
  "&:hover": {
    backgroundColor: "red",
    color: "red",
  },
};

const getColor = (todo) => {
  console.log(todo);
  if (todo.status === "COMPLETED") {
    return { color: "green" };
  }
};

export default ToDoCard;
