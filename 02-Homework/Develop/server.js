const express = require ("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.port || 8080;

app.listen(PORT, function() => {
   console.log(`App listening http://localhosst:${PORT}`); 
});