const gql = require('graphql-tag');

const typeDefs = gql`

  enum TODO_STATUS {
    IN_PROGRESS
    COMPLETED
    NOT_STARTED
  }

  type ToDo {
    id:ID!
    taskName:String!
    status:TODO_STATUS!
    createdAt:String!
  }

  input CreateToDo {
    taskName:String!
    status:TODO_STATUS!
  }

  input UpdateToDo {
    id:ID!
    status:TODO_STATUS
  }

  type Query {
    getAllToDo:[ToDo]!
    getToDoByStatus(status:TODO_STATUS):[ToDo]
  }

  type Mutation {
    createToDo(input:CreateToDo):ToDo
    updateToDo(input:UpdateToDo):ToDo!
  }

`

module.exports = typeDefs;