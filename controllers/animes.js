const express = require("express");
const animes = express.Router();
const animesArr = require("../data/animes");

animes.get("/animes", (req, res) => {
    //console.log(animesArr);
    res.status(200).json(animesArr);
 });

 module.exports = animes;