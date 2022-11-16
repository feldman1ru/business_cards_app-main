const chalk = require("chalk");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
first:{type:String,
    minLength: 2},
last: {type:String,
    minLength: 2},
phone : {
        type:String,
        match: RegExp(/^0[0-9]{1,2}(\-?|\s?)[0-9]{3}(\-?|\s?)[0-9]{4}/g),
        required: true},
email : {
            type:String,
            match: RegExp(/.+@.+\..{2,}/g),
            required: true,},
            password: {
                    type: String,
                    match: RegExp(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/)
 },
 image : {
    url:{type:String,
        match: RegExp(/^http[s]?\:\/\/.{1,}.(jpg|png|jpeg)$/g),},
    alt:{type:String,
        minLength: 2,}
    },
    address :{
        state:{type:String,
            minLength: 2},
        country : {
            type:String,
            minLength: 2,
            required: true,},
        city : {
            type:String,
            minLength: 2,
            required: true,},
        street : {
            type:String,
            minLength: 2,
            required: true,},
        housenumber : {
            type:Number,
            required: true,},
        zip : {
            type:Number,
           }
        },
    isAdmin : false,
    isBusiness : false,
    createdAt: { type: Date, default: Date.now },
});

const schema = new mongoose.Schema({
  name:  userSchema,
});

const Test = mongoose.model("test", userSchema);

app.post("/", async (req, res) => {
  try {
    const dataFromReqBody = req.body;
    const user = new Test(dataFromReqBody);
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
    res.status(400).send(error.message);
  }
});

app.use((err, req, res, next) => {
  console.error(chalk.redBright(err.message));
  res.status(500).send(err.message);
});

exports.schema =  schema;