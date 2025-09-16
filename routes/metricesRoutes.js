const express = require("express");
const {
  addMetric,
  getAllMetrics,
  getMetricById,
  getMetricByExperimentId,
  updateMetric,
  deleteMetric,
} = require("../controllers/metricescontroller");

const router = express.Router();

router.post("/", addMetric);
router.get("/", getAllMetrics);
router.get("/experiment/:experimentId", getMetricByExperimentId);
router.get("/:id", getMetricById);
router.put("/:id", updateMetric);
router.delete("/:id", deleteMetric);

module.exports = router;
