const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
  experimentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experiment",
    required: true,
  },
  modelName: { type: String, required: true },
  version: { type: String, required: true },
  filePath: { type: String }, // or storage URL
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Model", ModelSchema);
