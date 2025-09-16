const mongoose = require("mongoose");

const ExperimentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  experimentId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "running", "completed"],
  },
});

module.exports = mongoose.model("Experiment", ExperimentSchema);
