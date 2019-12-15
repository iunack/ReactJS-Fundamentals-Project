const models = require("../models");

module.exports = {
  get: {
    all: (req, res, next) => {
      models.Game.find()
        .populate("uploader")
        .sort({ date: -1 })
        .then(games => res.send(games))
        .catch(next);
    },

    game: (req, res, next) => {
      const id = req.params.id;
      models.Game.findOne({ _id: id })
        .populate("uploader")
        .populate("downloaders")
        .then(game => res.send(game))
        .catch(next);
    }
  },
  post: (req, res, next) => {
    const { title, genre, platform, description, image, price } = req.body;
    const { _id } = req.user;
    console.log(req.body);

    models.Game.create({
      title,
      genre,
      platform,
      description,
      image,
      price,
      uploader: _id
    })
      .then(createdGame => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { upgames: createdGame } }),
          models.Game.findOne({ _id: createdGame._id })
        ]);
      })
      .then(([modifiedObj, gameObj]) => {
        res.send(gameObj);
      })
      .catch(next);
  },

  put: {
    purchase: async (req, res, next) => {
      const id = req.params.id;
      const { userId } = req.body;
      console.log(userId);

      try {
        const game = await models.Game.findOneAndUpdate(
          { _id: id },
          { $push: { downloaders: userId } }
        );
        await models.User.updateOne(
          { _id: userId },
          { $push: { downgames: id }, $inc: { amount: -game.price } }
        );
        await models.User.updateOne(
          { _id: game.uploader },
          { $inc: { amount: game.price } }
        );
        res.send({
          game,
          message: "Successfuly purchased!"
        });
      } catch (error) {
        next(error);
      }
    }
  },

  delete: async (req, res, next) => {
    const id = req.params.id;

    try {
      const removedGame = await models.Game.findOneAndDelete({ _id: id });
      await models.User.updateOne(
        { _id: removedGame.uploader },
        { $pull: { upgames: removedGame._id, downgames: removedGame._id } }
      );

      res.send({
        removedGame,
        message: "Successfuly removed game!"
      });
    } catch (error) {
      next(error);
    }
  }
};
