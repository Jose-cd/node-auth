const JWT = require("jsonwebtoken");
const users = {
  id: 1,
  email: "admin@gmail.com",
  password: "password",
  role: "user",
};
const Controller = {
  HelloWorld: (req, res) => {
    return res.status(200).send({ msg: "Hello World" });
  },
  Login: (req, res) => {
    const { email, password } = req.body;
    if (email == users.email && password == users.password) {
      const token = JWT.sign({ id: users.id, role: users.role }, "JWT_SECRET");
      return res.status(200).send(token);
    } else {
      return res.status(400).send({ msg: "wrong credentials" });
    }
  },
  Secret: (req, res) => {
    return res.status(200).send("SECRET STRING!!!!");
  },
};

module.exports = Controller;
