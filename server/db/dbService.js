const ENVIRONMENT = "dev"
// const ENVIRONMENT = "prod"

const connectToDB = ()=>{
    if(ENVIRONMENT === "dev") require('./mongodb/connectToMongoLocally');
    if(ENVIRONMENT === "prod") require('./mongodb/connectToAtlas');
    if(ENVIRONMENT === "test") require('./mongodb/connectToAtlas');
};

module.exports = connectToDB;