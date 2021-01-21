const isAuthorized = (opts, hasRole, allowSameUser) => {
  return (req, res, next) => {
    const { role } = res.locals;
    if (!role) return res.status(403).send({ msg: "No role identified" });
    if (opts.hasRole.includes(role)) {
      return next();
    } else {
      return res.status(401).send({ msg: "No authorized" });
    }
  };
};

module.exports = { isAuthorized };
