const router = requie("express").Router();
const path = require("path");

router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

router.get("*", function(req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});