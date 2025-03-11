const express = require("express");
const { createProject } = require("../controllers/projectController");
const upload = require("../middlewares/multerConfig");

const router = express.Router();

// مسار إضافة مشروع جديد مع رفع الصور
router.post(
  "/add",
  upload.fields([
    { name: "main_image", maxCount: 1 },
    { name: "photos", maxCount: 5 },
  ]), // رفع صورة واحدة لـ main_image و 5 صور لـ photos
  createProject
);

module.exports = router;
