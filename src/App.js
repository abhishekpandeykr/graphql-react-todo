import React from "react";
import "./App.css";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HeaderComponent from "./components/HeaderComponent";
import InputField from "./components/InputField";
import ToDoListComponent from "./components/TodoList";

const GET_ALL_TODOS = gql`
  {
    getAllToDo {
      taskName
      status
      id
    }
  }
`;

const CREATE_TODO = gql`
  mutation createToDoReq($todoInput: CreateToDo) {
    createToDo(input: $todoInput) {
      taskName
      status
      id
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_ALL_TODOS);
  const [createToDo, cretedToDo] = useMutation(CREATE_TODO, {
    update(cache, { data: { createToDo } }) {
      const allToDos = cache.readQuery({ query: GET_ALL_TODOS });
      cache.writeQuery({
        query: GET_ALL_TODOS,
        data: { getAllToDo: [createToDo, ...allToDos.getAllToDo] },
      });
    },
  });

  if (loading || cretedToDo.loading) return <p>Loading...</p>;
  if (error || cretedToDo.error) return <p>Error</p>;

  const newToDo = (request) => {
    createToDo({
      variables: { todoInput: request },
    });
  };

  return (
    <div className="App">
      <HeaderComponent />
      <InputField newToDo={newToDo} />
      <ToDoListComponent />
    </div>
  );
}

export default App;
