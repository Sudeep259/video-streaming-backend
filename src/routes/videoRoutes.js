import express from "express";
import { uploadVideo } from "../controllers/videoController.js";
import { upload } from "../config/multer.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { streamVideo } from "../controllers/videoController.js";


const router = express.Router();
router.post(
  "/upload",
  authMiddleware,
  upload.single("video"), // must match the key in Postman
  uploadVideo
);
router.get("/stream/:filename", streamVideo);


export default router;