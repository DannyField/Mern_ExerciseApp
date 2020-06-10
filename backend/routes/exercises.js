const router = require("express").Router();
// Bringing in the mongoose exercise model
let User = require("../models/exercise.model");

// Our first endpoint, that gets GET requests
router.route("/").get((req, res) => {
  //   The find() will look for all the users in the mongoose database and returns a promise
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Gets POST requests
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
