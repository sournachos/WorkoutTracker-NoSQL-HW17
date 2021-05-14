const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }, { exercises: req.body }).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.post("/api/workouts", function({body}, res) {
    db.Workout.create(body).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).where('_id').gt(0).lt(6).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

};