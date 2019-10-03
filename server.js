// ========== DEPENDENCIES ========== //
var express = require("express");
var path = require("path");

// ========== EXPRESS CONFIGURATION ========== //
// Instantiate Express server
var app = express();

// ========== PORTS SETUP ========== //
var PORT = process.env.PORT || 7000;

// ========== SET UP EXPRESS APP TO HANDLE DATA PARSING ========== //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ========== ROUTES ========== //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ========== LISTENER (STARTS THE SERVER) ========== //
app.listen(PORT, function() {
    console.log("App listening on PORT: ", PORT);
});