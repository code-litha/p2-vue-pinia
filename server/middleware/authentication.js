const { verifyToken } = require("../helpers");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "InvalidToken" };
    }

    const decodedToken = verifyToken(access_token);

    const user = await User.findOne({
      where: {
        id: decodedToken.id,
      },
    });

    if (!user) {
      throw { name: "InvalidToken" };
    }

    req.loginUser = {
      id: user.id,
    };

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
