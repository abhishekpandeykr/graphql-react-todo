const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('api/db/db.json');
const db = low(adapter);
const todosAction= require('./todo')

module.exports = {
  model:{
    TODOS:todosAction(db)
  },
  db
}