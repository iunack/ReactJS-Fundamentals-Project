const router = require("../routes/");
const config = require("./config");
const utils = require("../utils");
const models = require('../models')

module.exports = app => {
  
  app.use("/api/user", router.user);

  app.use("/api/game", router.game);

  app.use("*", (req, res, next) =>
    res.send("<h1> Something went wrong. Try again.</h1>")
  );
};
