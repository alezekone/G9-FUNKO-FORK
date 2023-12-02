const express = require('express');
const mainControllers = require('../controllers/mainController');

const router = express.Router();

router.get('/home', mainControllers.home);
router.get('/contacts', mainControllers.contact);
router.get('/about', mainControllers.about);
router.get('/faqs', mainControllers.faqs);

module.exports = router;
