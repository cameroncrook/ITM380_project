const express = require("express");
const router = new express.Router();
const accountController = require("../controllers/accountController");

router.get("/login", accountController.renderLogin);
router.post("/login", accountController.handleLogin);

router.get("/register", accountController.renderRegister);
router.post("/register", accountController.handleRegistration);

module.exports = router;