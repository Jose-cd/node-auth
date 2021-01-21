const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller.js");
var { isAuthenticated } = require("../middlewares/authenticated");
var { isAuthorized } = require("../middlewares/authorized");
router.get("/helloworld", Controller.HelloWorld);
router.post("/login", Controller.Login);
router.get(
  "/secret",
  isAuthenticated,
  isAuthorized({ hasRole: ["admin"] }),
  Controller.Secret
);
module.exports = router;
