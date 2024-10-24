function renderLogin(req, res) {
    res.render("account/login");
}

function renderRegister(req, res) {
    res.render("account/register");
}

module.exports = { renderLogin, renderRegister }