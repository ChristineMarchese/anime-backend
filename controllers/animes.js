const express = require("express");
const animes = express.Router(); // express.Router allows us to have almost a mini app for one resource in one place, inseat of having them all in the same place
const animesArr = require("../data/animes");


// get ALL Anime : "/animes"
animes.get("/", (req, res) => {
    //console.log(animesArr);
    res.status(200).json(animesArr);
 });

 // get one Anime
 // :id is a parameter in our path
 animes.get("/:id",(req, res) => {
     try{
   //use request.params.to access path paramether
   // whatever you name path parameters, that is going to be the key in your request.params object
     console.log(req.params)
     //const id = req.params.id;
     const {id} = req.params;// since req.params is an object, we can destructure the id
     const anime = animesArr.find(anime => anime.id === Number(id)); // using .find to find the element that matches the id from our req
     if(anime){
        res.status(200).json(anime);
     } else {
         throw "anime could not be found"
     }
    } catch(error){
        res.status(404).json({error: error})
    }
});

// CREATE one anime: "/animes"
animes.post("/", (req, res) => {
     try{
       //console.log(req.body);
       const anime = req.body;
       anime.id = animesArr.length + 1;
       if(anime.name && anime.description){
         // if data exist add to animes arr and send back successful response
         animesArr.push(anime);
         res.status(201).json(animesArr[animes.length - 1]);
       } else {
          throw 'could not show anime'
       }
     } catch(error){
        req.status(404).json({ error: error })
     }
});

animes.delete("/:id", (req, res) => {
       try{
        const { id } = req.params;
        const index = animesArr.findIndex((anime) => anime.id === +id );
        if(index !== -1){
         //if the index is found
         animesArr.splice(index, 1) // removing anime
         res.status(200).json(animesArr)
        } else {
          throw 'could not find anime';
        }
       } catch(error){
         res.status(404).json({ error: error});
       }
});

//update one Anime "/animes/:id"
 
 animes.put('/:id', (req, res) => {
     try { 
       const { id } = req.params; // destructuring id for the anime we are updating
       const anime = req.body; // req. body provides the anime with the updates
       const index = animesArr.findIndex((anime) => +id === anime.id) // we are using the id to find the index
       if(index !== -1){
          animesArr.splice(index, 1, anime);// replace the anime with the updated anime object
          res.status(201).json(animesArr)
       } else{
         throw 'could not update anime'; // trigg
       }
      } catch(error){
        res.status(400).json({ error: error});
    }
  });
      
 

 module.exports = animes;

 // orders
 // products
 // users