const express = require ("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, () => {
   console.log(`App listening http://localhost:${PORT}`); 
});