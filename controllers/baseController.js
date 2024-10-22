const baseController = {}

baseController.buildHome = async function(req, res) {
    const message = "This is a test message";
    res.render("index", {message})
}

module.exports = baseController