const JWT = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send({ msg: "Unauthorized" });
  if (!authorization.startsWith("Bearer")) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  const split = authorization.split("Bearer ");
  if (split.length !== 2) return res.status(401).send({ msg: "Unauthorized" });
  const token = split[1];

  try {
    const decodedToken = JWT.verify(token, "JWT_SECRET");
    if (!decodedToken) {
      return res
        .status(401)
        .json({ msg: "Token verification failed, acceso denegado" });
    }
    res.locals = {
      ...res.locals,
      id: decodedToken.id,
      role: decodedToken.role,
    };
    next();
  } catch (err) {
    return res.status(401).send({ msg: "Invalid Token" });
  }
};

module.exports = { isAuthenticated };
