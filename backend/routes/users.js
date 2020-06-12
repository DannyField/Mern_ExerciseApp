const router = require("express").Router();

// Bringing in the mongoose model
let User = require("../models/user.model");

// Our first endpoint, that gets GET requests
router.route("/").get((req, res) => {
  //   The find() will look for all the users in the mongoose database and returns a promise
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Gets POST requests
router.route("/add").post((req, res) => {
  const username = req.body.username;
  // Create a new instance of the new User
  const newUser = new User({ username });

  //   After the user has been saved
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
