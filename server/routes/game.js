const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.game.get);

router.post('/', auth(), controllers.game.post);

router.put('/:id', auth(), controllers.game.put);

router.delete('/:id', auth(), controllers.game.delete);

module.exports = router;