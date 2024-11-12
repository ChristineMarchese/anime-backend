const express = require('express');
const app = express();
const animesController = require("./controllers/animes");

// any function with access 
app.get("/", (req, res) => {
     //console.log(req)
    res.send("Welcome to Animania");
})

app.use("/", animesController);

// our routes are setup to listen to requests to their specific URL/path



module.exports = app;