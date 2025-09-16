const Model = require("../models/model");

// Add model
exports.addModel = async (req, res) => {
  try {
    const { experimentId, modelName, version, filePath } = req.body;
    if (!experimentId || !modelName || !version) {
      return res
        .status(400)
        .json({ error: "Experiment ID, model name, and version are required" });
    }
    const newModel = new Model({
      experimentId,
      modelName,
      version,
      filePath,
    });
    await newModel.save();
    res.status(201).json(newModel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
// Get all models

exports.getAllModels = async (req, res) => {
  try {
    const models = await Model.find();
    res.json(models);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
// Get model by ID
exports.getModelById = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    if (!model) {
      return res.status(404).json({ error: "Model not found" });
    }
    res.json(model);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
// Get models by Experiment ID
exports.getModelByExperimentId = async (req, res) => {
  try {
    const models = await Model.find({ experimentId: req.params.experimentId });
    res.json(models);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update model
exports.updateModel = async (req, res) => {
  try {
    const { modelName, version, filePath } = req.body;
    const model = await Model.findById(req.params.id);
    if (!model) {
      return res.status(404).json({ error: "Model not found" });
    }
    if (modelName) model.modelName = modelName;
    if (version) model.version = version;
    if (filePath) model.filePath = filePath;
    await model.save();
    res.json(model);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
// Delete model
exports.deleteModel = async (req, res) => {
  try {
    const deletedModel = await Model.findByIdAndDelete(req.params.id);
    if (!deletedModel)
      return res.status(404).json({ error: "Model not found" });
    res.status(200).json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
