const mongoose = require("mongoose");

const MetricesSchema = new mongoose.Schema({
  experimentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experiment",
    required: true,
  },
  metricName: { type: String, required: true }, // e.g., accuracy, loss
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Metrices", MetricesSchema);
