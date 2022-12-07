const { verifyToken } = require("./Providers/jwt");
const {handleError} = require("../utils/handleErrors");
const config = require("config");

const tokenGenerator = config.get("TOKEN_GENERATOR");

const auth = (req, res, next) =>{

    if(tokenGenerator === "jwt"){
        try {
            const tokenFromClient = req.header("x-auth-token")
            if(!tokenFromClient) throw new Error("Authention Error: Please Login");

            const userInfo = verifyToken(tokenFromClient)
            if(!userInfo) throw new Error ("Authention Error: Unauthorize user");
            req.user = userInfo;
            return next()

        } catch (error) {
            return handleError(res, 401, error.message)
        }
    }
    return handleError(res,500, "No0 Noo Noo... you did not use jwt! ")
}

module.exports = auth;