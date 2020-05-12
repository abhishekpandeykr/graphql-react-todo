import React from "react";
import Paper from "@material-ui/core/Paper";
import ToDoCard from "./ToDo";
import { makeStyles } from "@material-ui/core/styles";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { colors } from "@material-ui/core";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
      width: "35ch",
    },
  },
}));

const GET_ALL_TODOS = gql`
  {
    getAllToDo {
      taskName
      status
      id
    }
  }
`;
const TOGGLE_TODO_STATUS = gql`
  mutation toggleToDo($updatedToDO: UpdateToDo) {
    updateToDo(input: $updatedToDO) {
      taskName
      status
      id
    }
  }
`;

const ToDoListComponent = () => {
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_ALL_TODOS);
  const [toggleStatus, toggledToDos] = useMutation(TOGGLE_TODO_STATUS);
  console.log(data, "data is");

  if (loading || toggledToDos.loading) return <p>Loading...</p>;
  if (error || toggledToDos.error) return <p>Error</p>;

  const changeStatus = (currentToDo) => {
    const toggleStatusReqObj = {
      id: currentToDo.id,
      status: currentToDo.status,
    };
    toggleStatus({
      variables: { updatedToDO: toggleStatusReqObj },
    });
  };

  return (
    <div style={todoAlignment}>
      {data.getAllToDo.map((todo, index) => (
        <Paper
          className={classes.root}
          variant="elevation"
          key={index}
          elevation={1}
          rounded="true"
        >
          <ToDoCard {...todoIcon(todo, changeStatus)} />
        </Paper>
      ))}
    </div>
  );
};

const todoAlignment = {
  alignSelf: "center",
  maxHeight: "450px",
  overflowY: "auto",
};

const todoIcon = (todo, changeStatus) => {
  const currentToDo = { ...todo, changeStatus };
  if (currentToDo.status === "COMPLETED") {
    return { ...currentToDo, todoIcon: faCheckCircle };
  }
  return { ...currentToDo, todoIcon: faCircle };
};

export default ToDoListComponent;
