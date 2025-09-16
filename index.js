require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const experimentsRouter = require("./routes/experimentRoutes");
const metricesRouter = require("./routes/metricesRoutes");
const modelRouter = require("./routes/modelRoutes");
const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/experiments", experimentsRouter);
app.use("/api/metrices", metricesRouter);
app.use("/api/models", modelRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
