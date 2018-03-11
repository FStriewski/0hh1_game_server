//create a new game
const fillBoard = require("../lib/game");

router.post("/game", (req, res) => {

  let gameBoard = []
  const square = fillBoard()


  //onst square = Game.findById(req.params.id)
  const events = req.body

 Game.create(square)
    .then(square => {
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});
