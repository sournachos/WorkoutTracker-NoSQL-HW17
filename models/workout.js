// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now()
    },
    exercises: {
      type: Array,
      default: []
    }
  });

// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = Workout;