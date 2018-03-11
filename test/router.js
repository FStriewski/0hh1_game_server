const Router = require("express").Router;
const router = new Router();
const Test = require("./model");

router.post("/game", (req, res) => {

  const game = {
    rowid: req.body.rowid,
    colid: req.body.rowid,
    value: req.body.value,
    locked: req.body.locked
  };

  console.log(user);

  Users.create(user)
    .then(entity => {
      res.status(201);
      res.send({
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({
        message: "Something went wrong"
      });
    });
});


module.exports = router;
