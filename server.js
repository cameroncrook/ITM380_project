// REQUIRE STATEMENTS
// ==========================
const express = require('express');
const path = require('path');
const static = require("./routes/static");
const baseController = require('./controllers/baseController');
const accountRoutes = require('./routes/accountRoutes');

const app = express();

app.set('view engine', 'ejs');

// ROUTES
app.use(static);

// Define a route handler for the default home page
app.get("/", baseController.buildHome);
app.use("/account", accountRoutes);

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});