const express = require("express");

const {
  addExperiment,
  getAllExperiments,
  getExperimentById,
  updateExperiment,
  deleteExperiment,
} = require("../controllers/experimentcontroller");

const router = express.Router();

router.post("/add", addExperiment);
router.get("/getall", getAllExperiments);
router.get("/get/:id", getExperimentById);
router.put("/update/:id", updateExperiment);
router.delete("/delete/:id", deleteExperiment);

module.exports = router;
