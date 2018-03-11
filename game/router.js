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

//create a new game
// router.post("/game", (req, res) => {
//   const square = Game.findById(req.params.id)
//     .then(square => {
//
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500);
//       res.json({ message: "There was a server error" });
//     });
// });


router.put('/game/:id', (req, res) => {
  //  const squareId = Number(req.params.id)
    const updates =  req.body


  Game.findById(req.params.id)
    .then(entity => {
      //if (entity) {
        return entity.update(updates);
    //  } else {
    //    res.status(404);
    //    res.json({ message: "Square not found, can't update." })
    //  }
    })
    .then(final => {
      // return update
          res.send(final);
      res.status(200);

    })
    .catch(error => {
      res.status(500);
      res.json({
        message: "There was an error. No update."
      });
    });
});



module.exports = router;
