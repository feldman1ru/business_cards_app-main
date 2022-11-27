const Card = require("../models/mongodb/Card");
var _ = require("lodash");
const {handleBadRequest} = require("../../utils/handleErrors");

const generateBizNumber  = async () =>{
   
    try {
      const random = _.random(1000000, 9000000);
      const card = await Card.findOne({bizNumber: random},{bizNumber: 1, _id: 0 });

        if (card) return generateBizNumber();
        return random;
        } catch (error) {
       
        return handleBadRequest("GenerateBizNumber",error);
      }
};

module.exports = generateBizNumber;


