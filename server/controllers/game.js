const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Game.find()
            .then((games) => res.send(games))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Game.create({ description, author: _id })
            .then((createdGame) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdGame } }),
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
            .then((updatedGame) => res.send(updatedGame))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Game.deleteOne({ _id: id })
            .then((removedGame) => res.send(removedGame))
            .catch(next)
    }
};