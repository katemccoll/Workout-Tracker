const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {type: Date, default: Date.now },
    exercises: [
        {
            type: {
                    type: String,
                    trim: true,
                    required: "Enter workout exercise"
                },
            name: {
                    type: String,
                    trim: true,
                    required: "Enter a name for workout"
                },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
        },
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = {Workout};