const express = require('express');
const servercontroller = require('../controllers/serverController');

const router = express.Router();

//#region ROUTES
router.route('/').get(servercontroller.pingServer);
//#endregion

module.exports = router;