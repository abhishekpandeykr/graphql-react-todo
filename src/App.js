import React from 'react';
import './App.css';
import { useQuery,useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import HeaderComponent from './components/HeaderComponent'
import InputField from './components/InputField'
import ToDoListComponent from './components/TodoList'

const GET_ALL_TODOS = gql`
  {
    getAllToDo {
      taskName
      status
      id
    }
  }
`
const TOGGLE_TODO_STATUS = gql`
  mutation toggleToDo($updatedToDO:UpdateToDo){
    updateToDo(input:$updatedToDO){
      taskName
      status
      id
    }
  }
`

const CREATE_TODO = gql `
  mutation createToDoReq($todoInput:CreateToDo){
    createToDo(input:$todoInput){
      taskName
      status
      id
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(GET_ALL_TODOS);
  const [toggleStatus, toggledToDos] = useMutation(TOGGLE_TODO_STATUS);
  const [createToDo, cretedToDo] = useMutation(CREATE_TODO, {
    update(cache, {data:{createToDo}}){
      const allToDos = cache.readQuery({query:GET_ALL_TODOS});
      cache.writeQuery({
        query:GET_ALL_TODOS,
        data:{getAllToDo:[createToDo, ...allToDos.getAllToDo]}
      })
    }
  })

  if (loading || toggledToDos.loading || cretedToDo.loading) return <p>Loading...</p>;
  if (error || toggledToDos.error || cretedToDo.error) return <p>Error</p>;

  const changeStatus = (currentToDo) => {
    const toggleStatusReqObj = {
      id: currentToDo.id,
      status:currentToDo.status
    }
    toggleStatus({
      variables:{updatedToDO:toggleStatusReqObj}
    })
  }

  const newToDo = request => {
    createToDo({
      variables:{todoInput:request}
    })
  }

  return (
    <div className="App">
      <HeaderComponent />
      <InputField newToDo={newToDo}/>
      <ToDoListComponent {...data} changeStatus={changeStatus}/>
    </div>
  );
}

export default App;
