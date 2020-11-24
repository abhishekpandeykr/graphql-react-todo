const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("api/db/db.json");
const db = low(adapter);
const todosAction = require("./todo");
const authAction = require("./auth");

module.exports = {
  model: {
    TODOS: todosAction(db),
    AUTH: authAction(db),
  },
  db,
};
