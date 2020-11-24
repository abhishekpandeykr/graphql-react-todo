const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./schemas");
const { model, db } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context(req) {
    return { model, db };
  },
});

server.listen(3001).then((_) => console.log("server is running at 3001"));
