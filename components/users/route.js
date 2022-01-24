const service = require('./service');
const router = require('express').Router();

router.get('/', service.getMessage);
router.get('/:name', service.getCustomMessage);


module.exports = router;