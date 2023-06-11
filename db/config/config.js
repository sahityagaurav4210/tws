require("dotenv/config");

const { DB_HOST, DB_PASS, DB_USER, DB_NAME, DIALECT } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DIALECT,
  },
};
