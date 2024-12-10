const accountModel = require('../models/account-models');

function renderLogin(req, res) {
    res.render("account/login");
}

function renderRegister(req, res) {
    res.render("account/register");
}

async function handleRegistration(req, res) {
    const { account_username, account_email, account_password } = req.body;

    const isRegistered = await accountModel.registerAccount(account_username, account_email, account_password);

    if (isRegistered) {
        return res.redirect('/account/login');
    } else {
        return res.redirect('/account/register');
    }
}

async function handleLogin(req, res) {
    const { account_email, account_password } = req.body;

    const user = await accountModel.getAccount(account_email);

    if (user) {
        if (user.account_password == account_password) {
            delete user.account_password;
            
            req.session.user = user;

            console.log("Logged in");

            return res.redirect('/courses');
        } else {
            return res.redirect('/account/login');
        }
    } else {
        console.log(user);
        return res.redirect('/account/register');
    }
}

module.exports = { renderLogin, renderRegister, handleRegistration, handleLogin }