const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.game.get.all);

router.get('/:id', controllers.game.get.game);

router.post('/create', auth(), controllers.game.post);

router.put('/purchase/:id', auth(), controllers.game.put.purchase);

//router.put('/:id', auth(), controllers.game.put);

router.delete('/:id', auth(), controllers.game.delete);

module.exports = router;