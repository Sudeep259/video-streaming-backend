import { Video } from "../models/Video.js";
import fs from "fs";
import path from "path";
export const uploadVideo = async (req, res) => {
  try {
    console.log("FILE:", req.file);
console.log("BODY:", req.body);
    const { title } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    const video = await Video.create({
      title,
      filename: req.file.filename,
      userId: req.user.id,
    });

    res.json({
      message: "Video uploaded",
      video,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const streamVideo = (req, res) => {
  const { filename } = req.params;

  const videoPath = path.join("uploads", filename);

  if (!fs.existsSync(videoPath)) {
    return res.status(404).json({ message: "Video not found" });
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;

  const range = req.headers.range;

  if (!range) {
  const headers = {
    "Content-Length": fileSize,
    "Content-Type": "video/mp4",
  };

  res.writeHead(200, headers);
  fs.createReadStream(videoPath).pipe(res);
  return;
}

  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);

  const stream = fs.createReadStream(videoPath, { start, end });

  stream.pipe(res);
};