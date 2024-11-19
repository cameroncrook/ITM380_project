const express = require("express");
const router = new express.Router();
const coursesController = require("../controllers/coursesController");

router.get('/', coursesController.renderCourses);

router.get('/levels', coursesController.renderLevels);

router.get('/content', coursesController.renderContent);

module.exports = router;