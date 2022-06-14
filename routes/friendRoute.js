const express = require('express');
const friendController = require('../controllers/friendController')
const router = express.Router();

router.get('/', friendController.getAll); 
router.get('/:id', friendController.getSingle);
router.post('/', friendController.createNew);
router.put('/:id', friendController.update);
router.delete('/:id', friendController.takeOut);



module.exports = router;