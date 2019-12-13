const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");

module.exports = {
  get: {
    all: (req, res, next) => {
      models.User.find()
        .then(users => res.send(users))
        .catch(next);
    },
    user: (req, res, next) => {
      const id = req.params.id;
      models.User.findOne({ _id: id })
        //remove password from response
        .then(user => {
          (user.password = ""), res.send(user);
        })
        .catch(next);
    }
  },

  post: {
    register: (req, res, next) => {
      const { username, password } = req.body;
      if (username.length <= 3 && password.length <= 4) {
        res.send({ message: "Wrong credentials!" });
        return;
      }
      models.User.create({ username, password })
        .then(createdUser =>
          res.send({
            user: createdUser,
            message:
              "You have been registred! Congats! Please log in your account!"
          })
        )
        .catch(next);
    },

    login: (req, res, next) => {
      const { username, password } = req.body;
      models.User.findOne({ username })
        .then(user => {
          if (!user) {
            res.status(404);
            res.send(JSON.stringify("Invalid username or password"));
            return;
          }

          return Promise.all([user, user.matchPassword(password)]);
        })
        .then(([user, match]) => {
          if (!match) {
            res.status(401).send({ message: "Invalid username or password" });
            return;
          }

          const token = utils.jwt.createToken({ id: user._id });

          res.cookie(config.authCookieName, token);

          res.send({
            user,
            token,
            message: `Welcome back master ${username} !`
          });
        })
        .catch(next);
    },

    logout: (req, res, next) => {
      const token = req.cookies[config.authCookieName];
      console.log("-".repeat(100));
      console.log(token);
      console.log("-".repeat(100));
      models.TokenBlacklist.create({ token })
        .then(() => {
          res
            .clearCookie(config.authCookieName)
            .send({ message: "Logout successfully!" });
        })
        .catch(next);
    }
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { username, password } = req.body;
    models.User.update({ _id: id }, { username, password })
      .then(updatedUser => res.send(updatedUser))
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.User.deleteOne({ _id: id })
      .then(removedUser => res.send(removedUser))
      .catch(next);
  }
};
