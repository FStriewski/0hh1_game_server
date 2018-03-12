//create a new game
const fillBoard = require("../lib/game");
const bcrypt = require("bcrypt");
const router = new Router();
const sign = require("../jwt").sign;
const Game = require("./model");


// Authentication middleware:
// const requireUser = (req, res, next) => {
//   if (req.user) next();
//   else
//     res.status(401).send({
//       message: "Please login"
//     });
// };

router.post("/game", (req, res) => {

  //let gameBoard = []
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

module.exports = router;
