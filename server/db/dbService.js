const ENVIRONMENT = undefined || "development";

const connectToDB = () => {
  if (ENVIRONMENT === "development")require("./mongodb/connectToMongoLocally");
  if (ENVIRONMENT === "production")require("./mongodb/connectToAtlas");
};

module.exports = connectToDB;