const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    models.Game.find()
    .populate('uploader')
      .sort({ date: -1 })
      .then(games => res.send(games))
      .catch(next);
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

  put: (req, res, next) => {
    const id = req.params.id;
    const { description } = req.body;
    models.Game.updateOne({ _id: id }, { description })
      .then(updatedGame => res.send(updatedGame))
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Game.deleteOne({ _id: id })
      .then(removedGame => res.send(removedGame))
      .catch(next);
  }
};
