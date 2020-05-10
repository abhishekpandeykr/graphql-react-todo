/*
  TODo Structure will be like 
  {
    id:Number,
    taskName:String,
    status:COMPLETED|IN_PROGRESS| NOT_STARTED
    createdAt:Number
  }
*/
const { nanoid} = require('nanoid')
const todosAction = db => {
  return {
    findByStatus(filter){
      return db.get('todos').filter({status:filter}).value();
    },

    findAll(){
      return db.get('todos').value();
    },

    addToDo(todo) {
      const newTodo = {id:nanoid(), createdAt:Date.now(), ...todo};
      db.get('todos').push(newTodo).write()
      return newTodo;
    },

    updateToDo(todo) {
      if(todo.status ==='COMPLETED') {
        todo.status = 'NOT_STARTED'
      } else {
        todo.status ='COMPLETED'
      }
      let currentToDo = db.get('todos').find({id:todo.id}).set('status',todo.status).write();
      return currentToDo;
    }
  }
};

module.exports = todosAction