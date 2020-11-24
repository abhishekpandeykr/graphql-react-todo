const resolvers = {
  Query: {
    getAllToDo(initialValue, { input }, context) {
      return context.model.TODOS.findAll();
    },

    getToDoByStatus(initialValue, { status }, context) {
      return context.model.TODOS.findByStatus(status);
    },
  },
  Mutation: {
    createToDo(initialValue, { input }, context) {
      return context.model.TODOS.addToDo(input);
    },

    updateToDo(initialValue, { input }, context) {
      console.log(input);
      return context.model.TODOS.updateToDo(input);
    },

    createUser(initialValue, { input }, context) {
      console.log("input", input);
      return context.model.AUTH.addUser(input);
    },

    findSavedUser(initialValue, { input }, context) {
      return context.model.AUTH.findSavedUser(input);
    },
  },
};

module.exports = resolvers;
