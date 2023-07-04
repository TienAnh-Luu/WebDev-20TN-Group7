'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/postsController');

router.get('/', controller.show);
router.get('/:id', controller.showDetails);

module.exports = router;
