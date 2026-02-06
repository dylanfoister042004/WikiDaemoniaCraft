import express from "express";
import cors from "cors";
import wikiRoutes from "./routes/wiki";
import { logger } from "./utils/logger";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "8mb" }));

// Logging
app.use((req, _res, next) => {
  logger(`API Request → ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/wiki", wikiRoutes);

// Default route
app.get("/", (_req, res) => {
  res.json({ status: "Daemonia Backend OK", version: "1.0.0" });
});

// Start server
app.listen(PORT, () => {
  logger(`Daemonia Backend running on port ${PORT}`);
});
