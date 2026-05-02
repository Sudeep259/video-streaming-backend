import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";



dotenv.config();

const app = express();

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/video", videoRoutes);
// DB connect + sync
sequelize.authenticate()
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

sequelize.sync()
  .then(() => console.log("Tables created"))
  .catch(err => console.log(err));

const PORT = 8383;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});