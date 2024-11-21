const express = require('express');// dependency // require express from node_modules
const app = express(); // configuration // storing an instance of express in our app variable
const animesController = require("./controllers/animes");

app.use(express.json()); // parse body of data 

// any function with access to the request and response object is called middleware 
// this creates one route 
app.get("/", (req, res) => {
     //console.log(req)
    res.send("Welcome to Animania");
})

app.use("/animes", animesController);

// our routes are setup to listen to requests to their specific URL/path

app.get("*", (req, res) => { // catch all for all request that did not match any route
     res.status(404).send("The request you are looking for does not exist");
})

module.exports = app;