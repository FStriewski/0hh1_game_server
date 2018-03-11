const Router = require("express").Router;
const router = new Router();
const Test = require("./model");


router.get("/test", (req, res) => {
  const test = Test.findAll()
    .then(test => {
      res.json(test);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({ message: "There was a server error" });
    });
});

module.exports = router;
