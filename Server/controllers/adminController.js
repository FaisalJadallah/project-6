const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Donation, Project, ContactMessage } = require("../models");
require("dotenv").config();

// ✅ تسجيل دخول المدير
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("🔍 بيانات تسجيل الدخول:", req.body);
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.role !== "admin")
      return res.status(403).json({ message: "Access denied. Admins only." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1w" }
    );

    return res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ جلب قائمة التبرعات
const getDonations = async (req, res) => {
  try {
    console.log("📢 جلب التبرعات...");
    const donations = await Donation.findAll();

    console.log("✅ قائمة التبرعات:", donations);
    res.json(donations);
  } catch (error) {
    console.error("❌ خطأ أثناء جلب التبرعات:", error);
    res.status(500).json({ message: "Error fetching donations", error });
  }
};

// ✅ جلب قائمة المشاريع
const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

// ✅ جلب الرسائل
const getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.findAll();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" });
  }
};

module.exports = { adminLogin, getDonations, getProjects, getMessages };
