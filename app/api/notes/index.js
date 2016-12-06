var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/', controller.index);
router.post('/', controller.create);

router.get(':id', controller.show);
router.patch('/:id', controller.update);
// router.put('/:id', controller.update);  patch vs put????
router.delete('/:id', controller.delete);

module.exports = router;