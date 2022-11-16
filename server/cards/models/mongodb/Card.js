const mongoose = require("mongoose");
const chalk = require("chalk");

const CardSchema = new mongoose.Schema({
    title : {
        type:String,
        minLength: 2,
        required: true},
    subtitle : {
        type:String,
        minLength: 2,
        required: true},
    description : {
        type:String,
        minLength: 2,
        required: true},
    phone : {
        type:String,
        match: RegExp(/^0[0-9]{1,2}(\-?|\s?)[0-9]{3}(\-?|\s?)[0-9]{4}/g),
        required: true},
    email : {
        type:String,
        match: RegExp(/.+@.+\..{2,}/g),
        required: true},
    web : {
        type:String,
        match: RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi),
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
            required: true},
        street : {
            type:String,
            minLength: 2,
            required: true},
        housenumber : {
            type:Number,
            required: true},
        zip : {
            type:Number,
           }
        },
        bizNumber : {type:Number,
        minLength: 2,
        required: true},
        createdAt: { type: Date, default: Date.now },
        user_id : mongoose.Types.ObjectId,
        likes : [{type:String,}]
});

const schema = new mongoose.Schema({
    name: CardSchema,

});
  const Test = mongoose.model("test",CardSchema);
  
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
   