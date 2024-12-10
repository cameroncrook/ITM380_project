const express = require("express");
const router = new express.Router();
const coursesController = require("../controllers/coursesController");

router.get('/', coursesController.renderCourses);

router.get('/:course_id', coursesController.renderLevels);

router.get('/:course_id/level/:level_id', coursesController.renderContent);

module.exports = router;