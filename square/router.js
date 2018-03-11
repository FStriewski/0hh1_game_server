const Router = require("express").Router;
const router = new Router();
const Square = require("./model");


router.get("/square", (req, res) => {
  const square = Square.findAll()
    .then(square => {
      res.json(square);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});


router.get("/square/:id", (req, res) => {
  const square = Square.findById(req.params.id)
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


router.put('/square/:id', (req, res) => {
    const squareId = Number(req.params.id)
    const updates =  req.body


  Square.findById(squareId)
    .then(entity => {
      if (entity) {
        return entity.update(updates);
     } else {
       res.status(404);
       res.json({ message: "Square not found, can't update." })
     }
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
