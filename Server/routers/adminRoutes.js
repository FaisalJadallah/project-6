const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authenticateAdmin = require("../middlewares/authMiddleware"); // تأكد من أن `authMiddleware.js` يستخدم `module.exports = authenticateAdmin;`

// ✅ مسار تسجيل دخول المدير
router.post("/login", adminController.adminLogin);

// ✅ المسارات المحمية للمديرين فقط
router.get("/donations", authenticateAdmin, adminController.getDonations);
router.get("/projects", authenticateAdmin, adminController.getProjects);
router.get("/messages", authenticateAdmin, adminController.getMessages);

module.exports = router;
