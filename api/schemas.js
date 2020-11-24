const gql = require("graphql-tag");

const typeDefs = gql`
  enum TODO_STATUS {
    IN_PROGRESS
    COMPLETED
    NOT_STARTED
  }

  type ToDo {
    id: ID!
    taskName: String!
    status: TODO_STATUS!
    createdAt: String!
  }

  type User {
    username: String!
    password: String!
  }

  input CreateToDo {
    taskName: String!
    status: TODO_STATUS!
  }

  input CreateUser {
    username: String!
    password: String!
  }

  input UpdateToDo {
    id: ID!
    status: TODO_STATUS
  }

  type Query {
    getAllToDo: [ToDo]!
    getToDoByStatus(status: TODO_STATUS): [ToDo]
  }

  type Mutation {
    createToDo(input: CreateToDo): ToDo
    updateToDo(input: UpdateToDo): ToDo!
    createUser(input: CreateUser): User
    findSavedUser(input: CreateUser): User
  }
`;

module.exports = typeDefs;
