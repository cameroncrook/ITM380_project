
function renderCourses(req, res) {
    res.render('courses/courses');
}

function renderLevels(req, res) {
    res.render('courses/levels');
}

function renderContent(req,res) {
    res.render('courses/content');
}

module.exports = { renderCourses, renderLevels, renderContent };