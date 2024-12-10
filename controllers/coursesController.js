const courseModel = require('../models/course-models');

async function renderCourses(req, res) {
    const courses = await courseModel.getCourses();

    res.render('courses/courses', { courses });
}

function renderLevels(req, res) {
    res.render('courses/levels');
}

function renderContent(req,res) {
    res.render('courses/content');
}

module.exports = { renderCourses, renderLevels, renderContent };