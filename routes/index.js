const express = require('express');

const router = express.Router();

const homeContoller = require('../controllers/home_controller');

router.get('/',homeContoller.home);
router.use('/create-note',require('./create'));
router.use('/delete/',require('./delete'));


//for any further router, access from here
//router.use('/routerName',require('./routerfile'))

module.exports = router;