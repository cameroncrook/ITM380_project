// REQUIRE STATEMENTS
// ==========================
const express = require('express');
const session = require('express-session');
const path = require('path');
const static = require("./routes/static");
const baseController = require('./controllers/baseController');
const accountRoutes = require('./routes/accountRoutes');
require('dotenv').config();
const pool = require('./database/connection');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(session({
    store: new (require('connect-pg-simple')(session))({
        createTableIfMissing: true,
        pool,
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    name: 'session',
}));

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
