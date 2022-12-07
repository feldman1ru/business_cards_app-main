const config = require("config")
const ENVIRONMENT = config.get("NODE_ENV");

const connectToDB = () => {
  if (ENVIRONMENT === "development")require("./mongodb/connectToMongoLocally");
  if (ENVIRONMENT === "production")require("./mongodb/connectToAtlas");
};

module.exports = connectToDB;