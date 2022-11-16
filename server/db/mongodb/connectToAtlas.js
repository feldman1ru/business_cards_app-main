const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
.connect("mongodb://localhost:27017/ruslan_business_card_app")
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