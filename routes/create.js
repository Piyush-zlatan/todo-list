const express = require('express');

const router = express.Router();

const createController = require('../controllers/create_controller');

router.post('/',createController.create);

module.exports = router;