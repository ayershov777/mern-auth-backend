const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.post('/signup', usersCtrl.create);
router.post('/login', usersCtrl.authenticate)

router.get('/', usersCtrl.index);
router.get('/:id', usersCtrl.show);
router.put('/:id', usersCtrl.update);

module.exports = router;
