const dotenv = require("dotenv");

const config = {
  db: {
    name: process.env.DB_NAME || "dubsado",
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    protocol: process.env.DB_PROTOCOL || "mongodb",
  },
};
module.exports = config;
