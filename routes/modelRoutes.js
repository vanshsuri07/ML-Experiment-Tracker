const express = require("express");
const {
  addModel,
  getAllModels,
  getModelById,
  getModelByExperimentId,
  updateModel,
  deleteModel,
} = require("../controllers/modelcontroller");

const router = express.Router();

router.post("/", addModel);
router.get("/", getAllModels);
router.get("/experiment/:experimentId", getModelByExperimentId);
router.get("/:id", getModelById);
router.put("/:id", updateModel);
router.delete("/:id", deleteModel);

module.exports = router;
