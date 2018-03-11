const Router = require("express").Router;
const router = new Router();
const Game = require("./model");


router.get("/game", (req, res) => {
  const square = Game.findAll()
    .then(square => {
      res.json(square);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});


router.get("/game/:id", (req, res) => {
  const square = Game.findById(req.params.id)
    .then(square => {
      if(square){
        res.json(square);
      } else {
        res.json({message: "SquareID not found"})
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});




module.exports = router;
