const courseModel = require('../models/course-models');

async function renderCourses(req, res) {
    const courses = await courseModel.getCourses();

    res.render('courses/courses', { courses });
}

async function renderLevels(req, res) {
    const course_id = req.params.course_id;

    const course = await courseModel.getCourseInfo(course_id);
    const levels = await courseModel.getLevels();

    res.render('courses/levels', {course, levels});
}

async function renderContent(req,res) {
    const course_id = req.params.course_id;
    const level_id = req.params.level_id;

    const slides = await courseModel.getContent(level_id, course_id);

    res.render('courses/content', { slides, level_id });
}

module.exports = { renderCourses, renderLevels, renderContent };