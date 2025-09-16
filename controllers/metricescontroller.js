const Metric = require("../models/metrices");

// Add metric
exports.addMetric = async (req, res) => {
  try {
    const { experimentId, metricName, value } = req.body;
    if (!experimentId || !metricName || value === undefined) {
      return res.status(400).json({
        error: "Experiment ID, metric name, and value are required",
      });
    }

    const newMetric = new Metric({ experimentId, metricName, value });
    await newMetric.save();
    res.status(201).json(newMetric);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all metrics
exports.getAllMetrics = async (req, res) => {
  try {
    const metrics = await Metric.find().populate("experimentId");
    res.status(200).json(metrics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get metric by _id
exports.getMetricById = async (req, res) => {
  try {
    const metric = await Metric.findById(req.params.id).populate(
      "experimentId"
    );
    if (!metric) return res.status(404).json({ error: "Metric not found" });
    res.status(200).json(metric);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get metrics by experimentId
exports.getMetricByExperimentId = async (req, res) => {
  try {
    const metrics = await Metric.find({
      experimentId: req.params.experimentId,
    });
    if (!metrics || metrics.length === 0) {
      return res
        .status(404)
        .json({ error: "No metrics found for this experiment" });
    }
    res.status(200).json(metrics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update metric
exports.updateMetric = async (req, res) => {
  try {
    const updatedMetric = await Metric.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMetric)
      return res.status(404).json({ error: "Metric not found" });
    res.status(200).json(updatedMetric);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete metric
exports.deleteMetric = async (req, res) => {
  try {
    const deletedMetric = await Metric.findByIdAndDelete(req.params.id);
    if (!deletedMetric)
      return res.status(404).json({ error: "Metric not found" });
    res.status(200).json({ message: "Metric deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
