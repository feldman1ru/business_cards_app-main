const DB = process.env.DB || "MONGODB";

const find = async () => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve([{ cards: "in mongodb" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards not in mongodb");
};

const findMyCards = async userId => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(`my cards: ${userId}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get card not in mongodb");
};

const findOne = async cardId => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(`in findOne card no: ${cardId}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get card not in mongodb");
};

const create = async normalizedCard => {
  if (DB === "MONGODB") {
    try {
      normalizedCard._id = "123456";
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(normalizedCard);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("create card not in mongodb");
};

const update = async (cardId, normalizedCard) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`in update card no. ${cardId}`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card update not in mongodb");
};

const like = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${cardId} liked!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card liked not in mongodb");
};

const remove = async cardId => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${cardId} deleted!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

exports.find = find;
exports.findMyCards = findMyCards;
exports.findOne = findOne;
exports.create = create;
exports.update = update;
exports.like = like;
exports.remove = remove;
