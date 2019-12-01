const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/game', router.game);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again.</h1>'))
};