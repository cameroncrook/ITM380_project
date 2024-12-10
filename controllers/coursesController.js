const courseModel = require('../models/course-models');

async function renderCourses(req, res) {
    const courses = await courseModel.getCourses();

    res.render('courses/courses', { courses });
}

async function renderLevels(req, res) {
    const course_id = req.params.course_id;

    const course_info = await courseModel.getCourseInfo(course_id);
    const levels = await courseModel.getLevels();

    res.render('courses/levels', {course_info, levels});
}

function renderContent(req,res) {
    const level_id = req.params.level_id;

    console.log(level_id);

    res.render('courses/content');
}

module.exports = { renderCourses, renderLevels, renderContent };