const knex = require("knex");
// this is how knex connect to Database
const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/cromi`,
  searchPath: "public",
});

module.exports = db;