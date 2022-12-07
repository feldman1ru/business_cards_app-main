const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");
const userName = config.get("DB_NAME");
const password = config.get("DB_PASSWORD");


mongoose
.connect(`mongodb://localhost:27017/${userName}${password}ruslan_business_card_app`)
.then(()=> console.log(
    chalk.magentaBright("connected successfully to mongoDB Atlas!"
    )
)
)
.catch(()=> console.log(chalk.redBright.bold(
    `Mongodb Error:could not to mongodb: ${error}`
)
)
);

