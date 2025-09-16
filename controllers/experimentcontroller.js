const Experiment = require("../models/Experiment");

// Add
exports.addExperiment = async (req, res) => {
  try {
    const { name, experimentId, description, date, status } = req.body;
    if (!name || !experimentId || !description || !date || !status) {
      return res.status(400).json({
        error:
          "Experiment ID, name, description, date, and status are required",
      });
    }

    const newExperiment = new Experiment({
      name,
      experimentId,
      description,
      date: new Date(date),
      status,
    });

    await newExperiment.save();
    res.status(201).json(newExperiment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all
exports.getAllExperiments = async (req, res) => {
  try {
    const allExperiments = await Experiment.find();
    res.status(200).json(allExperiments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get by _id
exports.getExperimentById = async (req, res) => {
  try {
    const experiment = await Experiment.findById(req.params.id);
    if (!experiment) {
      return res.status(404).json({ error: "Experiment not found" });
    }
    res.status(200).json(experiment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update
exports.updateExperiment = async (req, res) => {
  try {
    const updatedExperiment = await Experiment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExperiment) {
      return res.status(404).json({ error: "Experiment not found" });
    }
    res.status(200).json(updatedExperiment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
exports.deleteExperiment = async (req, res) => {
  try {
    const deletedExperiment = await Experiment.findByIdAndDelete(req.params.id);
    if (!deletedExperiment) {
      return res.status(404).json({ error: "Experiment not found" });
    }
    res.status(200).json({ message: "Experiment deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
