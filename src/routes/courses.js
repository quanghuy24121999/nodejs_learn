const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/:slug', CourseController.show);

module.exports = router;