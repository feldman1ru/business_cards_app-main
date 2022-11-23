const Card = require("./mongodb/Card");

const DB = process.env.DB || "MONGODB";

// const getCards = async () => {
//   if (DB === "MONGODB") {
//     try {
//      //   throw new Error("Opss... i did it again!");
//       return Promise.resolve([{ card: "in mongodb" }]);
//     } catch (error) {
//       error.status = 404;
//       return Promise.reject(error);
//     }
//   }
//   return Promise.resolve("get cards not in mongodb");
// };

const getCards = async () => {

  if (DB === "MONGODB") {
    try {
      const cards = await Card.find()
     //   throw new Error("Opss... i did it again!");
      return Promise.resolve([{ cards }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve([{}]);
};



const getMyCards = async userId => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find({user_id: {$eq: userId}})
      if(!cards)
      throw new Error("Could not find any cards in the database")
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(cards);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get card not in mongodb");
};

const getCard = async cardId => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.find({card_id: {$eq: cardId}})
      if(!card)
      throw new Error("Could not find any card in the database")
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get card not in mongodb");
};

const createCard = async normalizedCard => {
  if (DB === "MONGODB") {
    try {
      let card = new Card(normalizedCard);
      card = await card.save();
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("createCard card not in mongodb");
};

const updateCard = async (cardId, normalizedCard) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findByIdAndUpdate(cardId,normalizedCard, {new: true})
      if(!card)
      throw new Error("Could not update this because a card with this ID be found in the database")
      return Promise.resolve({ card });
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card updateCard not in mongodb");
};

const likeCard = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findById(cardId);
      if(!card)
      throw new Error("Could not change card likes because a card with this ID cannot be found in the database")
      const user = await Card.find({likes: {$elemeMatch: {user: userId}}});
      if(!user){
        card.likes.user_id = userId;
      }else{
        card.likes.user_id = "";
      }
      return Promise.resolve({ card });
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card updated!");
};

const deleteCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findByIdAndDelete(cardId);
      if(!card)
      throw new Error("Could not delete this card because a card with this ID cannot be found in the database")
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

exports.getCards = getCards;
exports.getMyCards = getMyCards;
exports.getCard = getCard;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
exports.deleteCard = deleteCard;