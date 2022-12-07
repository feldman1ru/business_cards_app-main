const chalk = require("chalk");
const express = require("express");
const { handleError } = require("./utils/handleErrors");
const app = express();
const router = require("./router/router");
const cors = require("./middlewares/cors");
const logger = require("./logger/loggerService");
const connectToDB = require("./db/dbService");
const config = require("config");
const {generateInitialCards, generateInitialUsers} = require("./initialData/initialDataService")
const { required } = require("joi");


app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static("./public"));
app.use(router);

app.use((err, req, res, next) => {
  handleError(res, 500, err.message);
});

const PORT = config.get ("PORT");
app.listen(PORT, () =>
  {console.log(chalk.magentaBright(`Listening on: http://localhost:${PORT}`))
connectToDB();
generateInitialCards();
generateInitialUsers();
}
);
