const Card = require("../models/mongodb/Card");
var _ = require("lodash");
const handleBadRequest = require("../../utils/handleErrors");

const generateBizNumber  = async () =>{
    const random = _.random(1000000,9000000);
    const card = await Card.findOne({bizNumber: random});
    try {
        if(card){
            return Promise.resolve( card );
        }else{
            return random

        }
      } catch (error) {
        error.status = 404;
        return Promise.reject(error);
      }

}



