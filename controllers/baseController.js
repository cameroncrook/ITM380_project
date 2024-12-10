const baseController = {}

baseController.buildHome = async function(req, res) {
    res.redirect('/courses');
}

module.exports = baseController