const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const config = require("./config");

const { production } = config;
const { user, pass, host, name, opts, protocol, poolSize } = config.db;
const auth = user && pass ? `${user}:${pass}@` : "";
const url = `${protocol}://${auth}${host}/${name}${opts}`;

const db = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  config: { autoIndex: !production },
  autoIndex: !production,
  poolSize: poolSize,
  keepAlive: true,
  connectTimeoutMS: 45000,
  socketTimeoutMS: 0,
};

async function connect() {
  if (mongoose.connection.readyState) {
    return Promise.resolve(mongoose);
  }
  mongoose.connection.on("connected", () => console.log("Connected to Mongo"));
  mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error:")
  );
  mongoose.connection.on("disconnected", () =>
    console.log("Disconnected from Mongo")
  );
  await mongoose.connect(url, db);
}

async function disconnect() {
  await mongoose.disconnect();
}

const methods = {
  connect: connect,
  disconnect: disconnect,
};

module.exports = methods;
